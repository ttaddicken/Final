app.controller('MainController', function($scope){
    $scope.test = "you made it !!"
  $scope.main = [
     {
      url: "http://www.digitalblasphemy.com/graphics/previews/fluorescence6_preview.jpg",
      pieceName: "Shrooms",
      artist: "Tims",
      },
      {
      url: "http://3.bp.blogspot.com/-L7F49CLFaIY/UXkAHeXht3I/AAAAAAAAMAs/tWxR2FsP4_M/s1600/digital-blasphemy+7.jpg",
      pieceName: "Flower Power",
      artist: "Digital Blasphemy",
      },
      {
      url: "http://randomwallpapers.net/nature-digital-blasphemy-windows-1920x1080-wallpaper291571.jpg",
      pieceName: "Closer To God",
      artist: "Unknown",
      },
      {
      url: "http://www.digitalblasphemy.com/graphics/640x480/conjunction640.jpg",
      pieceName: "Egypt what?",
      artist: "Moses",
      },
  ];
  
  $scope.addNew = function(newMain){
      
     $scope.main.push(newMain)
     $scope.newMain = ""
  }
  $scope.removeOld = function(item){
      debugger;
      for(var i=0; i < $scope.main.length; i++)
      if(item == $scope.main[i])
      $scope.main.splice(i, 1)
  }
    
})