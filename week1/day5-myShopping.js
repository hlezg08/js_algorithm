const myShopping = [
		{ category: "과일", price: 12000　},
		{ category: "의류", price:10000　 },
		{ category: "의류", price: 20000　},
		{ category: "장난감", price: 9000 },
		{ category: "과일", price: 5000　 },
		{ category: "의류", price: 10000  },
		{ category: "과일", price: 8000　　},
		{ category: "의류", price: 7000　　},
		{ category: "장난감", price: 5000  },
		{ category: "의류", price: 10000　 },
]
let cnt=0;
let total=0;
let rank;
for(let i=0;i<myShopping.length;i++){
  if(myShopping[i].category==="의류"){
    cnt++;
    total+=myShopping[i].price;
  }
}
if(cnt>=0&&cnt<=2){
  rank="Bronze";
}
else if(cnt>=3&&cnt<=4){
  rank="Silver";
}
else{
  rank="Gold";
}
console.log("의류를 구매한 횟수는 총 "+cnt+"회 금액은 "+total+"원 이며 등급은 "+rank+"입니다.");
























































