 function orderRerquest(data){
          //TODO: validation
          $.ajax({
            url: 'https://smartpost.store/apps/humocommerce/order-request',
            method: 'POST',
            dataType: 'json',
            data: data,
            success: function(res){
              console.log(res)
            },
            error: function(err){
              console.log(err.responseText)
            }
          });
          
        }