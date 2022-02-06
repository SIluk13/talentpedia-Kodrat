// var app = new Vue({
//     el: '#app',
//     data:{
//         message: "hello world"
//     }

// })

// var app = new Vue({
//     el: "#app",
//     data: {
//         url: "gambar.jpg",
//         caption: {
//             attr:"title",
//             text:"Hello ini adalah caption"
//         }
//     }
// })

// var app = new Vue ({
//     el: "#app",
//     data: {
//         tittle: "Tutorial vuejs",
//         content: "<pre>Ini adalah tutorial vuejs dari nol</pre>"
//     }
// })

var app = new Vue({
    el:"#app",
    data: {
        dataSiswa: true,
        name: "Biodata Diri Siswa",
        namaSiswa:"",
        umurSiswa:"",
        ortu:"",
        // cover: "gambar.jpg",
        // price: 14000,
        qty: "",
        walas: ""
    }

})

// var app = new Vue({
//     el:"#app",
//     data: {
//         newTask: "",
//         todolists: [
//             {'done':true, task:"Belajar Vuejs di talentpedia"},
//             {'done':false, task:"Siram tanaman di kebun"},
//             {'done':false, task:"Beli bibit kopi"}


//         ]
//     },
//     methods:{
//         addTask: function(){
//             this.todolists.push({'done': false, 'task': this.newTask});
//             this.newTask ="";
//         }
//     }

// })

// var app = new Vue({
//     el:"#app",
//     data: {
//         name: "Petani Kode",
//         hover: false
//     },
//     methodes:{
//         btnClick: function (){
//             alert(`Hi ${this.name}, Kamu sudah mengklik tombolnya`);
//         }
//     }
// })