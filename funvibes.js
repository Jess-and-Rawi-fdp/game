$('#container1').hide()
$('#container2').hide()

$(".tsawer").hide()


//hair
$("#redhair").on("click",function(){
	$(".hair1").hide()
	$("#redhair1").show()
})
$("#bluehair").on("click",function(){
	$(".hair1").hide()
	$("#bluehair1").show()
})
$("#greenhair").on("click",function(){
	$(".hair1").hide()
	$("#greenhair1").show()
})
$("#brownhair").on("click",function(){
	$(".hair1").hide()
	$("#brownhair1").show()
})

//shirt
$("#redshirt").on("click",function(){
	$(".shirt1").hide()
	$("#redshirt1").show()
})
$("#blueshirt").on("click",function(){
	$(".shirt1").hide()
	$("#blueshirt1").show()
})
$("#greenshirt").on("click",function(){
	$(".shirt1").hide()
	$("#greenshirt1").show()
})
$("#blackshirt").on("click",function(){
	$(".shirt1").hide()
	$("#blackshirt1").show()
})

//pants
$("#redpants").on("click",function(){
	$(".pants1").hide()
	$("#redpants1").show()
})
$("#bluepants").on("click",function(){
	$(".pants1").hide()
	$("#bluepants1").show()
})
$("#greenpants").on("click",function(){
	$(".pants1").hide()
	$("#greenpants1").show()
})
$("#blackpants").on("click",function(){
	$(".pants1").hide()
	$("#blackpants1").show()
})


//boots
$("#redboots").on("click",function(){
	$(".boots1").hide()
	$("#redboots1").show()
})
$("#greenboots").on("click",function(){
	$(".boots1").hide()
	$("#greenboots1").show()
})
$("#blueboots").on("click",function(){
	$(".boots1").hide()
	$("#blueboots1").show()
})
$("#brownboots").on("click",function(){
	$(".boots1").hide()
	$("#brownboots1").show()
})

$("#submit").on("click",function(){
	$(".front").hide()
	$('#container1').show()
	$('#container2').show()
	$("#body").show()
})
var char = document.getElementsByClassName(".character")
$("#exit1").on("click",function(){
	$(char).show()
	$('#container1').show()
	$('#container2').show()

})
$("#exit2").on("click",function(){
	$(char).hide()
	$('#container1').show()
	$('#container2').show()

})