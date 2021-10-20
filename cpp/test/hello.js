function get_time() {
  var date = new Date();
  var time = date.getTime();
  return time;
}

function view() {
  var AP = get_time();
  const canvas = document.getElementById('test_canvas');
  const context = canvas.getContext('2d')
  var BP = get_time();
  // キャンバス全体のピクセル情報を取得
  var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  var width = imageData.width, height = imageData.height;
  var pixels = imageData.data;  // ピクセル配列：RGBA4要素で1ピクセル

  var CP = get_time();

  // ピクセル単位で操作できる
  for (var y = 0; y < height; ++y) {
    for (var x = 0; x < width; ++x) {
      var base = (y * width + x) * 4;
      // なんかピクセルに書き込む
      pixels[base + 0] = x;  // Red
      pixels[base + 1] = y;  // Green
      pixels[base + 2] = x * y / 255;  // Blue
      pixels[base + 3] = 255;  // Alpha
    }
  }

  var DP = get_time();

  // 変更した内容をキャンバスに書き戻す
  context.putImageData(imageData, 0, 0);

  var EP = get_time();

  console.log((BP - AP) / 1000);
  console.log((CP - BP) / 1000);
  console.log((DP - CP) / 1000);
  console.log((EP - DP) / 1000);

}

var Module = {
  onRuntimeInitialized: function () {
    console.log('香川に行って : ' + Module.Kagawa());
    var miyoshistation = new Module.Miyoshi();
    console.log('三好市の中心駅は : ' + miyoshistation.get_station());
    miyoshistation.station_edit("窪川");
    console.log('四万十町の中心駅は : ' + miyoshistation.get_station());

    view()
  }
};
