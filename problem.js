const num = prompt('입력하실 자연수를 입력해주세요');
let count = 0;

for(let i=1; i < num; i++){
  for(let j=1; j < i; j++){
    if(i % j === 0) count++;
  }
  if(count === 1) alert(i);
  count = 0;
}
