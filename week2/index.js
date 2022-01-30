

// $(document).ready(function(){
//     $("button").click(function(){
//         $("li").each(function(){
//             alert($(this).text())
//         })
//     })
// })

function appendText(){
    var text1 = "Nama: Muhammad Kodrat"
    var text2 = $("<p></p>").text("Usia : 26 tahun")
    var text3 = document.createElement("p")
    text3.innerHTML = "Alamat: Padang"

    $("body").append(text1,text2,text3)
}

$(document).ready(function(){
    $("button").click(function(){
        $.getJSON("https://fakestoreapi.com/products", function(data){
            var seluruh_data = [""];
            $.each(data ,function(key, result){
                seluruh_data +='<tr>';
                seluruh_data +='<td>'+result.title+'</td>';
                seluruh_data +='<td>'+result.price+'</td>';
                seluruh_data +='<td>'+result.description+'</td>';
                seluruh_data +='</tr>';
                seluruh_data += "<br></br>";
            })
            $("#product_tabel").append(seluruh_data);
        })
    })
})

