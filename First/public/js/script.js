var socket = io("http://localhost:3000");
function DanhSachNgay(nam,thang){
if(thang==4||thang==6||thang==9||thang==11){
   return 30;
}
if((thang==2)&&(nam%4==0)){
   return 29;
}
if((thang==2)&&(nam%4!=0)){
   return 28;
}
return 31;
}
function InNgay(nam,thang){
    XoaBang();
    var currentday = new Date();
    var url = "/";
 var ngay=new Date(nam+"-"+thang+"-"+1);
 var temp =1;
 var c =true;
 for(var i=0;i<36;i=i+7){
      if(i%7==0){
        $("#days").append("<tr></tr>");
     }
     var thu = ngay.getDay();
     if(c){
     for(var k = 0;k<thu;k++){
        var cell = "<th></th>";
        $("#days").append(cell);
     }
     c=false;
    }
    if(i==0)
    {
    for( var j=thu;j<7;j++){
    // var cell = "<a href="+url+"><th id="+temp+">"+temp+"</th></a>";
    var cell = "<th><a href="+url+temp+"-"+thang+"-"+nam+">"+temp+"</a></th>";
    var cellcurrent = '<th ><a href='+url+temp+"-"+thang+"-"+nam+"><span style='color: red'>"+temp+'</span ></a></th>';
 
     if(temp==currentday.getDate()&&(thang==currentday.getMonth()+1)&&(nam==currentday.getFullYear())){
        $("#days").append(cellcurrent);
     }else{
        $("#days").append(cell);
     }
    temp++;
    if(temp>DanhSachNgay(nam,thang)){
        return;
    }
    }
}else{
    for( var j=0;j<7;j++){
      //  var cell = "<th><a href="+url+">"+temp+"</a></th>";
      var cell = "<th><a href="+url+temp+"-"+thang+"-"+nam+">"+temp+"</a></th>";
      var cellcurrent = '<th ><a href='+url+temp+"-"+thang+"-"+nam+"><span style='color: red'>"+temp+'</span ></a></th>';
      if(temp==currentday.getDate()&&(thang==currentday.getMonth()+1)&&(nam==currentday.getFullYear())){
         $("#days").append(cellcurrent);
      }else{
         $("#days").append(cell);
      }
        temp++;
        if(temp>DanhSachNgay(nam,thang)){
            return;
        }
        }
}
 }
}
function XoaBang(){
    $("#days").html("");
}
function KhoiDong(){
    var d =new Date();
    $("#thang").html((d.getMonth()+1));
    $("#nam").html(d.getFullYear());
    InNgay(d.getFullYear(),d.getMonth()+1);
}
function KhoiDong1(thang, nam){
    $("#thang").html(thang);
    $("#nam").html(nam);
    InNgay(nam,thang);
}
function ChayTang(nam,thang){
    if(thang>=12){
        thang=1;
        nam=nam+1;
    }else{
        thang++;
    }
    $("#thang").html(thang);
    $("#nam").html(nam);
    InNgay(nam,thang);
}
function ChayLui(nam,thang){
    if(thang<=1){
        thang=12;
        nam=nam-1;
    }else{
        thang--;
    }
    $("#thang").html(thang);
    $("#nam").html(nam);
    InNgay(nam,thang);
};
function save(){
    for(var i=1;i<49;i++){
    if($("#time").html()==$("#t"+i).html()){
    $("#f"+i).html($("#node").val());
    $("#node").val("");
    }
}
}
$(document).ready(function(){
  //  document.getElementById("hopthoai").close();
  $("#showhopthoai").hide();
//   $("#currentbt").click(function(){
//     var d =new Date();
//     $("#ngay").html(d.getDate());
//     $("#thangcv").html((d.getMonth()+1));
//     $("#namcv").html(d.getFullYear());
//   KhoiDong();
//   })
    $("#next").click(function(){
        ChayTang(parseInt($("#nam").html()),parseInt($("#thang").html()));
        });
     $("#prev").click(function(){
        ChayLui(parseInt($("#nam").html()),parseInt($("#thang").html()));
            });
            $("#cancel").click(function(){
                $("#node").val("");
               // document.getElementById("hopthoai").close();
               $("#showhopthoai").hide();
            })
            $("#save").click(function(){
                save();
               // document.getElementById("hopthoai").close();
               $("#showhopthoai").hide();
            })
        $("#f1").click( function(){
            $("#time").html($("#t1").html())
           // document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f2").click( function(){
            $("#time").html($("#t2").html())
           // document.getElementById("hopthoai").showModal();
           $("#showhopthoai").show();
        });
        $("#f3").click( function(){
            $("#time").html($("#t3").html())
           // document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f4").click( function(){
            $("#time").html($("#t4").html())
           // document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f5").click( function(){
            $("#time").html($("#t5").html())
           // document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f6").click( function(){
            $("#time").html($("#t6").html())
           // document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f7").click( function(){
            $("#time").html($("#t7").html())
          //  document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f8").click( function(){
            $("#time").html($("#t8").html())
           // document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f9").click( function(){
            $("#time").html($("#t9").html())
         //   document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f10").click( function(){
            $("#time").html($("#t10").html())
         //   document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f11").click( function(){
            $("#time").html($("#t11").html())
           // document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f12").click( function(){
            $("#time").html($("#t12").html())
           // document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f13").click( function(){
            $("#time").html($("#t13").html())
           // document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f14").click( function(){
            $("#time").html($("#t14").html())
          //  document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f15").click( function(){
            $("#time").html($("#t15").html())
         //   document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f16").click( function(){
            $("#time").html($("#t16").html())
         //   document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f17").click( function(){
            $("#time").html($("#t17").html())
           // document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f18").click( function(){
            $("#time").html($("#t18").html())
            //document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f19").click( function(){
            $("#time").html($("#t19").html())
           // document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f20").click( function(){
            $("#time").html($("#t20").html())
          //  document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f21").click( function(){
            $("#time").html($("#t21").html())
           // document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f22").click( function(){
            $("#time").html($("#t22").html())
          //  document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f23").click( function(){
            $("#time").html($("#t23").html())
           // document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f24").click( function(){
            $("#time").html($("#t24").html())
           // document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f25").click( function(){
            $("#time").html($("#t25").html())
           // document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f26").click( function(){
            $("#time").html($("#t26").html())
           // document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f27").click( function(){
            $("#time").html($("#t27").html())
          //  document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f28").click( function(){
            $("#time").html($("#t28").html())
           // document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f29").click( function(){
            $("#time").html($("#t29").html())
           // document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f30").click( function(){
            $("#time").html($("#t30").html())
          //  document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f31").click( function(){
            $("#time").html($("#t31").html())
           // document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f32").click( function(){
            $("#time").html($("#t32").html())
           // document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f33").click( function(){
            $("#time").html($("#t33").html())
          //  document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f34").click( function(){
            $("#time").html($("#t34").html())
           // document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f35").click( function(){
            $("#time").html($("#t35").html())
           // document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f36").click( function(){
            $("#time").html($("#t36").html())
           // document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f37").click( function(){
            $("#time").html($("#t37").html())
         //   document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f38").click( function(){
            $("#time").html($("#t38").html())
          //  document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f39").click( function(){
            $("#time").html($("#t39").html())
          //  document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f40").click( function(){
            $("#time").html($("#t40").html())
           // document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f41").click( function(){
            $("#time").html($("#t41").html())
           // document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f42").click( function(){
            $("#time").html($("#t42").html())
           // document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f43").click( function(){
            $("#time").html($("#t43").html())
           // document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f44").click( function(){
            $("#time").html($("#t44").html())
            //document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f45").click( function(){
            $("#time").html($("#t45").html())
          //  document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f46").click( function(){
            $("#time").html($("#t46").html())
           // document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f47").click( function(){
            $("#time").html($("#t47").html())
           // document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        $("#f48").click( function(){
            $("#time").html($("#t48").html())
           // document.getElementById("hopthoai").showModal();
            $("#showhopthoai").show();
        });
        // //socket.emit("thong-tin");
});


