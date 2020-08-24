      const width = window.innerWidth;
      const height = window.innerHeight;

      let scene = new THREE.Scene();
      let camera = new THREE.PerspectiveCamera(55, width / height, 45, 30000);
      camera.position.set(-900, -200, -900);

      let renderer = new THREE.WebGLRenderer({
        antialias: true
      });
      renderer.setSize(width, height);
      let j = document.body.appendChild(renderer.domElement);

      let controls = new THREE.OrbitControls(camera, j);
      controls.addEventListener('change, renderer');

      let materialArray = [];
      let texture_ft = new THREE.TextureLoader().load('valley_ft.jpg');
      let texture_bk = new THREE.TextureLoader().load('valley_bk.jpg');
      let texture_up = new THREE.TextureLoader().load('valley_up.jpg');
      let texture_dn = new THREE.TextureLoader().load('valley_dn.jpg');
      let texture_rt = new THREE.TextureLoader().load('valley_rt.jpg');
      let texture_lf = new THREE.TextureLoader().load('valley_lf.jpg');

      materialArray.push(new THREE.MeshBasicMaterial({map: texture_ft}));
      materialArray.push(new THREE.MeshBasicMaterial({map: texture_bk}));
      materialArray.push(new THREE.MeshBasicMaterial({map: texture_up}));
      materialArray.push(new THREE.MeshBasicMaterial({map: texture_dn}));
      materialArray.push(new THREE.MeshBasicMaterial({map: texture_rt}));
      materialArray.push(new THREE.MeshBasicMaterial({map: texture_lf}));

      for(let i = 0; i < 6; i++){
        materialArray[i].side = THREE.BackSide;
      let skyboxGeo = new THREE.BoxGeometry(10000,10000,10000);
      let skybox = new THREE.Mesh(skyboxGeo, materialArray);
      scene.add(skybox);
        animate();
      }

      function animate(){
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }
