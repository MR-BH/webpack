/**
 * Created by shenghua on 2017/1/15.
 */
(function ($) {
    const shade = "#556b2f";
    $.fn.greenify = function () {
        this.css('color', shade);
        return this;
    };
}(jQuery));