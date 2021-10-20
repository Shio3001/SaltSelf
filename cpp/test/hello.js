var Module = {
  onRuntimeInitialized: function () {
    console.log('香川に行って : ' + Module.Kagawa());

    var miyoshistation = new Module.Miyoshi();
    console.log('三好市の中心駅は : ' + miyoshistation.get_station());
    miyoshistation.station_edit("窪川");
    console.log('四万十町の中心駅は : ' + miyoshistation.get_station());

  }
};