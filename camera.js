// Main camera object class
// Note: The Camera class is dependent on matrix-generation functions located in matrix.js
var Camera = function()
{
    var that = this;
    
    that.x = 0;
    that.y = 0;
    that.z = 0;

    // This camera represented by a "mat4" matrix
    that.ViewMatrix = null;

    // Create LookAt matrix
    that.LookAt(tx, ty, tz)
    {

    }
}