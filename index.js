const fs = require('fs');

class Data {
    constructor(options = {}) {
        this.path = options.path || 'database.json';
    }

    _ensureFile() {
        if (!fs.existsSync(this.path)) {
            fs.mkdirSync(require('path').dirname(this.path), { recursive: true });
            fs.writeFileSync(this.path, '{}');
        }
    }

    set(data, value) {
        this._ensureFile();
        if (!data) throw new TypeError("The data is not defined!");
        const file = JSON.parse(fs.readFileSync(this.path, 'utf8'));
        file[data] = value;
        fs.writeFileSync(this.path, JSON.stringify(file, null, 4));
    }

    fetch(data) {
        this._ensureFile();
        if (!data) throw new TypeError("The data is not defined!");
        const file = JSON.parse(fs.readFileSync(this.path, 'utf8'));
        return file[data];
    }

    has(data) {
        this._ensureFile();
        if (!data) throw new TypeError("The data is not defined!");
        const file = JSON.parse(fs.readFileSync(this.path, 'utf8'));
        return file.hasOwnProperty(data);
    }

    delete(data) {
        this._ensureFile();
        if (!data) throw new TypeError("The data is not defined!");
        const file = JSON.parse(fs.readFileSync(this.path, 'utf8'));
        if (!file[data]) throw new TypeError('No data to delete!');
        delete file[data];
        fs.writeFileSync(this.path, JSON.stringify(file, null, 4));
    }

    fetchAll() {
        this._ensureFile();
        return JSON.parse(fs.readFileSync(this.path, 'utf8'));
    }

    add(data, value) {
        this._ensureFile();
        if (!data || isNaN(value)) throw new TypeError("Invalid data or value");
        if (!this.has(data)) this.set(data, 0);
        const file = JSON.parse(fs.readFileSync(this.path, 'utf8'));
        file[data] += value;
        fs.writeFileSync(this.path, JSON.stringify(file, null, 4));
    }

    subtract(data, value) {
        this._ensureFile();
        if (!data || typeof value !== "number") throw new TypeError("Invalid data or value");
        if (!this.has(data) || typeof this.fetch(data) !== "number") throw new TypeError("Data is not numeric");
        const file = JSON.parse(fs.readFileSync(this.path, 'utf8'));
        file[data] -= value;
        fs.writeFileSync(this.path, JSON.stringify(file, null, 4));
    }

    backup(fileName) {
        this._ensureFile();
        if (!fileName) throw new TypeError("Filename not defined!");
        const file = JSON.parse(fs.readFileSync(this.path, 'utf8'));
        fs.writeFileSync(`${fileName}.json`, JSON.stringify(file, null, 4));
    }

    reset() {
        this._ensureFile();
        fs.writeFileSync(this.path, JSON.stringify({}, null, 4));
    }

    all() {
        this._ensureFile();
        const object = JSON.parse(fs.readFileSync(this.path, 'utf8'));
        return Object.entries(object).map(([key, value]) => [`DATA = ${key}`, `VALUE = ${value}`]);
    }

    push(key, value) {
        this._ensureFile();
        let data = this.fetch(key);
        if (!Array.isArray(data)) data = [];
        data.push(value);
        this.set(key, data);
    }

    math(data, operator, value) {
        this._ensureFile();
        const file = JSON.parse(fs.readFileSync(this.path, 'utf8'));
        if (!data || !operator || isNaN(value) || isNaN(this.fetch(data))) throw new TypeError("Invalid input");

        switch (operator) {
            case '+': file[data] += value; break;
            case '-': file[data] -= value; break;
            case '*': file[data] *= value; break;
            case '/': file[data] /= value; break;
            case '%': file[data] %= value; break;
            default: return;
        }
        fs.writeFileSync(this.path, JSON.stringify(file, null, 4));
    }

    get(data) {
        return this.fetch(data);
    }
}

module.exports = (options = {}) => new Data(options);
