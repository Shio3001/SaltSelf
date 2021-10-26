


var canvas = document.getElementById('test_canvas');
var context = canvas.getContext('2d');
context.fillRect(0, 0, canvas.width, canvas.height);
// キャンバス全体のピクセル情報を取得
var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
var width = imageData.width, height = imageData.height;
var pixels = imageData.data;  // ピクセル配列：RGBA4要素で1ピクセル

function js_canvas_setup() {

}

function get_time() {
    var date = new Date();
    var time = date.getTime();
    return time;
}

function view(view_data) {

    var HP = get_time();

    // ピクセル単位で操作できる
    for (var y = 0; y < height; ++y) {
        for (var x = 0; x < width; ++x) {
            var base = (y * width + x) * 4;
            // なんかピクセルに書き込む
            pixels[base + 0] = view_data.GetDrawRGBA(x, y, 0);  // Red
            pixels[base + 1] = view_data.GetDrawRGBA(x, y, 1);  // Green
            pixels[base + 2] = view_data.GetDrawRGBA(x, y, 2);  // Blue
            pixels[base + 3] = 255;  // Alpha
        }
    }

    var DP = get_time();

    // 変更した内容をキャンバスに書き戻す
    context.putImageData(imageData, 0, 0);

    var EP = get_time();

    console.log((DP - HP) / 1000);
    console.log((EP - DP) / 1000);

    console.log("60fps参考数値 : " + 1 / 60)
    console.log("30fps参考数値 : " + 1 / 30)

}

//js_canvas_setup()
var Module = {
    onRuntimeInitialized: function () {
        var view_data = Module.ViewRun()
        view(view_data)
    }
};
