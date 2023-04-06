AFRAME.registerComponent("bowling-balls", {
    init: function () {
      this.throwBall();
    },
    throwBall: function () {
      window.addEventListener("keydown",(e)=>{
        if(e.key === "z"){
          var ball = document.createElement("a-entity")
          ball.setAttribute("gltf-model","./models/bowling_ball/scene.gltf")
         ball.setAttribute("scale",{
          x : 3,
          y : 3, 
          z : 3,
         })
          var camera1 = document.querySelector("#camera")
          pos = camera1.getAttribute("position")

          ball.setAttribute("position",{
             x : pos.x,
             y : pos.y -1.2,
             z : pos.z ,
          })
          var camera2 = document.querySelector("#camera").object3D
          var dir = new THREE.Vector3()
          camera2.getWorldDirection(dir)

          ball.setAttribute("velocity", dir.multiplyScalar(-10))

          var python = document.querySelector("#scene")
          python.appendChild(ball)
      }
      })
    }
  });