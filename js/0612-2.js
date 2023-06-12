// 입력양식 이벤트
// change, submit, focus, blur
// select, reset, focuin, focusout

// .prop() .attr()

$('#all-check').change(function(){
    if(this.checked){
        $('#item').children().attr('checked',true)
        $('#item').children().prop('checked',true)
    }else{
        $('#item').children().attr('checked',false)
        $('#item').children().prop('checked',false)
    }
})