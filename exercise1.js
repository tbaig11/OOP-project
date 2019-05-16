var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var students = /** @class */ (function () {
    function students() {
        this.gender = 'female';
    }
    students.prototype.getnationality = function () {
        return this.nationality;
    };
    return students;
}());
var undergraduates = /** @class */ (function (_super) {
    __extends(undergraduates, _super);
    function undergraduates(batch) {
        var _this = _super.call(this) || this;
        _this.batch = batch;
        return _this;
    }
    return undergraduates;
}(students));
var student1 = new undergraduates(10);
student1.nationality = "pak";
console.log("the nationality is" + student1.getnationality());
