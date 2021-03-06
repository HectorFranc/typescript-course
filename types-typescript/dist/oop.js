"use strict";
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
var Animal = (function () {
    function Animal(id, name) {
        this._id = id;
        this._name = name;
    }
    Animal.prototype.toString = function () {
        return this._id + " - " + this._name;
    };
    Object.defineProperty(Animal.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
var Pig = (function (_super) {
    __extends(Pig, _super);
    function Pig(id) {
        return _super.call(this, id, 'My Pig') || this;
    }
    Pig.prototype.toString = function () {
        return this._name;
    };
    return Pig;
}(Animal));
var Coordinate = (function () {
    function Coordinate(x, y) {
        this.x = x;
        this.y = y;
    }
    return Coordinate;
}());
var Point = (function (_super) {
    __extends(Point, _super);
    function Point(x, y, name) {
        var _this = _super.call(this, x, y) || this;
        _this.name = name ? name : '';
        return _this;
    }
    Point.getDistance = function (pointA, pointB) {
        return Math.sqrt(Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2));
    };
    Point.prototype.distanceTo = function (point) {
        return Point.getDistance(this, point);
    };
    return Point;
}(Coordinate));
