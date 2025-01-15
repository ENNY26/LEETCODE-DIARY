var maxProfit = function(prices) {
    let minprice = Infinity
    let maxprofit = 0  
  
    for (let price of prices){
      if(price < minprice){
          minprice = price
      
    }else{
      maxprofit = Math.max(maxprofit, price - minprice)
    }
    }
    return maxprofit
  };