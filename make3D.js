

function get_time() {
    var date = new Date();
    var time = date.getTime();
    return time;
}

function view(view_data) {
    var AP = get_time();
    const canvas = document.getElementById('test_canvas');
    const context = canvas.getContext('2d')
    var BP = get_time();
    // キャンバス全体のピクセル情報を取得
    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);

    var GP = get_time();

    var width = imageData.width, height = imageData.height;

    var FP = get_time();

    var pixels = imageData.data;  // ピクセル配列：RGBA4要素で1ピクセル

    var CP = get_time();



    // ピクセル単位で操作できる
    for (var y = 0; y < height; ++y) {
        for (var x = 0; x < width; ++x) {
            var base = (y * width + x) * 4;
            // なんかピクセルに書き込む
            pixels[base + 0] = view_data.GetDrawRGB(x, y, 0);  // Red
            pixels[base + 1] = view_data.GetDrawRGB(x, y, 1);  // Green
            pixels[base + 2] = view_data.GetDrawRGB(x, y, 2);  // Blue
            pixels[base + 3] = 255;  // Alpha
        }
    }

    var DP = get_time();

    // 変更した内容をキャンバスに書き戻す
    context.putImageData(imageData, 0, 0);

    var EP = get_time();

    console.log((BP - AP) / 1000);
    console.log((GP - BP) / 1000);
    console.log((FP - GP) / 1000);
    console.log((CP - FP) / 1000);
    console.log((DP - CP) / 1000);
    console.log((EP - DP) / 1000);

    console.log("60fps参考数値 : " + 1 / 60)
    console.log("30fps参考数値 : " + 1 / 30)

}

var Module = {
    onRuntimeInitialized: function () {
        var view_data = Module.ViewRun()
        view(view_data)
    }
};
