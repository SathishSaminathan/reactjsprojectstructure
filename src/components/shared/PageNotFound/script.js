/* Package JSON Import will be here */
import $ from 'jquery';
/* Package JSON Import will be here */

/* Const,Let & Var will be here */
var moveForce = 30; // max popup movement in pixels
var rotateForce = 20; // max popup rotation in deg
/* Const,Let & Var will be here */

$(document).mousemove(function (e) {
    var docX = $(document).width();
    var docY = $(document).height();

    var moveX = (e.pageX - docX / 2) / (docX / 2) * -moveForce;
    var moveY = (e.pageY - docY / 2) / (docY / 2) * -moveForce;

    var rotateY = e.pageX / docX * rotateForce * 2 - rotateForce;
    var rotateX = -(e.pageY / docY * rotateForce * 2 - rotateForce);

    $('.popup')
        .css('left', moveX + 'px')
        .css('top', moveY + 'px')
        .css('transform', 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');
});