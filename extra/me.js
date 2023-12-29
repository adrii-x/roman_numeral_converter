if ( (rev_solved_accumulator.length === 1 ) && !(i === (rev_solved_accumulator.length-1)) ) {
    new_list.push(rev_solved_accumulator[i])
    console.log('one did this'); 
}

else if ((rev_solved_accumulator.length === 2) && !(i === (rev_solved_accumulator.length-2)) ) {
    new_list.push(rev_solved_accumulator[i]) 
    console.log('two did this'); 
}
// else if ((rev_solved_accumulator.length === 2) && !(i === (rev_solved_accumulator.length-1)) ) {
//     new_list.push(rev_solved_accumulator[i]) 
//     console.log('two did this'); 
// }
else if ((rev_solved_accumulator.length === 3) && !(i === (rev_solved_accumulator.length-3)) ) {
    new_list.push(rev_solved_accumulator[i])
    console.log('3 did this');  
}
else if ((rev_solved_accumulator.length === 3) && !(i === (rev_solved_accumulator.length-2)) ) {
    new_list.push(rev_solved_accumulator[i])
    console.log('3 did this');  
}
// else if ((rev_solved_accumulator.length === 3) && !(i === (rev_solved_accumulator.length-1)) ) {
//     new_list.push(rev_solved_accumulator[i])
//     console.log('3 did this');  
// }
else if (list__2.children.length>3 && count<=((list__2.children.length-1) - 4) && !(span_box.join('')===solved[1]) ) {
    new_list.push(rev_solved_accumulator[i]) 
    count++
    console.log('4 did this');
}
else if (  (list__2.children.length>3 && (i==list__2.children.length-1) || (i==list__2.children.length-2) || (i==list__2.children.length-3) ) ) {
    new_list.push(rev_solved_accumulator[i]) 
    console.log('5 did this');
}