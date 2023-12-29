const mode = document.querySelector('.mode')
const form = document.querySelector('.row2 form')
const inputed = document.querySelector('.row2 form input')
const problem =document.querySelector('.row2 .err')
const ans = document.querySelector('.ans')
const notification = document.querySelector('.top-top')
const pointer = document.querySelector('.pointer')
const opener = document.querySelector('.opener')
const reducer = document.querySelector('.container_for_row1')
const row3 = document.querySelector('.row3')
const id_row3 = document.getElementById('row3')
const row2 = document.querySelector('.row2')
const row1 = document.querySelector('.row1')
const list1 = document.querySelector('.list1')
const list__2 = document.querySelector('.list2')
const section2 = document.querySelector('.section2')



const pointer2 = document.querySelector('.section2 .pointer')


console.log(list__2);
console.log(list1.childNodes);
console.log(list1.childNodes);
console.log(pointer2.childNodes);
console.log(document.body.offsetWidth)

let dashed
let undashed=[]
let initial_T = 0 
let box1= undefined
let counter3 = -1
let counter2 = -1
let counter = -1
let stopper = -1
let example2 = ''
let signaler = ''
let clicked = 0
let w = 0
let numbered=1

let cancel_count = 1
// let cancel_count2= 1












// console.log(time_list);

;
function time_regulator1(time_element,stop) {
    let time =  Date.now()
    let time_list=[]
    // let time_reducer=[]
    
    time_list.push(time)

    let interval = setInterval(() => {
        time=time+1
        time_list.push(time)
        time_reducer=[]

        let actual_time = time_list[time_list.length-1] - time_list[0]

        // for (let t = 0; t < time_list.length; t++) {
        //     if ((time_list[t] === time_list[0] || time_list[t] === time_list[time_list.length-1])) {
        //         time_reducer.push(time_list[t]) 
        //     }
             
        // }
        if (actual_time >= 172800) {
            time_element.innerHTML ='days ago'
            
        }
        if (actual_time >= 86400) {
            time_element.innerHTML ='day ago'
            
        }
        else if (actual_time >= 7200) {
            time_element.innerHTML ='hrs ago'
            
        }
        else if (actual_time >= 3600) {
            time_element.innerHTML ='hr ago'   
        }
        else if (actual_time >= 120) {
            time_element.innerHTML ='mins ago'
        }
        else if (actual_time >= 60) {
            time_element.innerHTML ='min ago' 
        }
        else if (actual_time >= 0) {
            time_element.innerHTML ='now'
            
        }
        
        
    }, 100);


    if (stop===true) {
        clearInterval(interval)
    }


    
}

function time_regulator2(time_element) {
    
    let time =  Date.now()
    let time_list=[]
    // let time_reducer=[]
    
    time_list.push(time)

    setInterval(() => {
        time=time+1
        time_list.push(time)
        time_reducer=[]

        let actual_time = time_list[time_list.length-1] - time_list[0]

        // for (let t = 0; t < time_list.length; t++) {
        //     if ((time_list[t] === time_list[0] || time_list[t] === time_list[time_list.length-1])) {
        //         time_reducer.push(time_list[t]) 
        //     }
             
        // }
        if (actual_time >= 172800) {
            time_element.innerHTML ='days ago'
            
        }
        if (actual_time >= 86400) {
            time_element.innerHTML ='day ago'
            
        }
        else if (actual_time >= 7200) {
            time_element.innerHTML ='hrs ago'
            
        }
        else if (actual_time >= 3600) {
            time_element.innerHTML ='hr ago'   
        }
        else if (actual_time >= 120) {
            time_element.innerHTML ='mins ago'
        }
        else if (actual_time >= 60) {
            time_element.innerHTML ='min ago' 
        }
        else if (actual_time >= 0) {
            time_element.innerHTML ='now'
            
        }
        
        
    }, 1000);

    
}

function time_regulator3(time_element) {
    let time =  Date.now()
    let time_list=[]
    // let time_reducer=[]
    
    time_list.push(time)

    setInterval(() => {
        time=time+1
        time_list.push(time)
        time_reducer=[]

        let actual_time = time_list[time_list.length-1] - time_list[0]

        // for (let t = 0; t < time_list.length; t++) {
        //     if ((time_list[t] === time_list[0] || time_list[t] === time_list[time_list.length-1])) {
        //         time_reducer.push(time_list[t]) 
        //     }
             
        // }
        if (actual_time >= 172800) {
            time_element.innerHTML ='days ago'
            
        }
        if (actual_time >= 86400) {
            time_element.innerHTML ='day ago'
            
        }
        else if (actual_time >= 7200) {
            time_element.innerHTML ='hrs ago'
            
        }
        else if (actual_time >= 3600) {
            time_element.innerHTML ='hr ago'   
        }
        else if (actual_time >= 120) {
            time_element.innerHTML ='mins ago'
        }
        else if (actual_time >= 60) {
            time_element.innerHTML ='min ago' 
        }
        else if (actual_time >= 0) {
            time_element.innerHTML ='now'
            
        }
        
        
    }, 1000);
}


// time_regulator1()






mode.addEventListener('click', ()=>{
    
    htmll= document.querySelector('html')


    if (mode.innerHTML.match('Dark')) {

        mode.innerHTML= 'Light Mode'
        htmll.classList.toggle('dark')   
    }
    else{
        mode.innerHTML= 'Dark Mode'
        htmll.classList.toggle('dark')  

    }
})


function checker(letters, num_list) {
    let words =[]
    let nums = []

    
    
    

    for (let index = 0; index < letters.length; index++) {
            for (let i = 0; i < box.length; i++) {
                if (box[i] === letters[index]){
                    words.push(box[i])
                    
                }
            }       
    }

    for (let index = 0; index < num_list.length; index++) {
        for (let i = 0; i < box.length; i++) {
            if (box[i] === num_list[index]){
                nums.push(box[i])
                
            }

        }
}
console.log(typeof words.join('')==='string' );

        if (box.includes('--')) {
        problem.classList.remove('hidden')
        problem.innerHTML='invalid Syntax'
        setTimeout(() => { inputed.value='' }, 200);
        ans.classList.add('hidden')
    }   


        else if (words.length && nums.length) {
            console.log(box);
            console.log(words);
            problem.classList.remove('hidden')
            problem.innerHTML='Dont mix numbers with numerals'
            setTimeout(() => { inputed.value='' }, 200); 
            ans.classList.add('hidden')  
            
        }

        else if(!(words.length===box.length) && !(nums.length===box.length)) {
            
        console.log(box);
        console.log(words);
        problem.classList.remove('hidden')
        ans.classList.add('hidden')
        problem.innerHTML='---invalid numerals'
        setTimeout(() => { inputed.value='' }, 200);   
    }

       

        else if ((words.length===0 && nums.length) || (words.length && nums.length===0)) {
            console.log('///' + box);
            console.log('---' + words);
            problem.classList.add('hidden')
            console.log(+nums.join(''));
            console.log(NaN === NaN);
            if((+nums.join('')) > 1000000){
                problem.classList.remove('hidden')
                problem.innerHTML='--the maximum conversion is 1000000'
                ans.classList.add('hidden')
                setTimeout(() => { inputed.value='' }, 200);   
    
            }
    
            else if((+nums.join('')) < 0){
                problem.classList.remove('hidden')
                problem.innerHTML='the minimum conversion is 0'
                ans.classList.add('hidden')
                setTimeout(() => { inputed.value='' }, 200);    
            }
            
            else if(((+nums.join('')) > -1) && words.length===0 ){

                
                
                console.log(nums)
                problem.classList.add('hidden')
                return box

                
            }

            else if(typeof words.join('')==='string'){
                
                //correcting repetition error
                for (let l = 0; l < box.length; l++) {

                    if ((l<=box.length)  ) {
                        
                        if ((box[l] === box[l+1]) && ((box[l+1] === box[l+2]) ) && ((box[l+2] === box[l+3])) ) {
                            console.log(box[l],box[l+1],box[l+2],box[l+3])
                            problem.classList.remove('hidden')
                            problem.innerHTML='*invalid numerals'
                            setTimeout(() => { inputed.value='' }, 200); 
                            ans.classList.add('hidden') 
                        }  

                        
                
                }}

                    //ends here


                //for canceling repitition
                for (let l = 0; l < box.length; l++) {
                    let excludes=['V','L','D','-V','-L','-D']

                    if ((l<=box.length)  ) {

                        excludes.forEach((ex)=>{
                            if ( ((box[l] === box[l+1]) && box[l].includes(ex))) {   
                                
                                
                                console.log(box[l]);
                                console.log(box[l+1]);
                                problem.classList.remove('hidden')
                                problem.innerHTML='+invalid numerals'
                                setTimeout(() => { inputed.value='' }, 200); 
                                ans.classList.add('hidden')   
                        }
                            

                        })
                        

            
                }}
                //ends here


                //correcting (4 or 9 with repetion) error   
                let values = []
                let final = 1
                let a = true
                let b = true
                box.forEach((numeral,x) => {

                    letters.forEach((word,i) => {
                        if (word === numeral) {values.push(i+1)}  });      
                    })
                    console.log(values)
                values.forEach((val, index)=>{
                    if ((val-values[index+1]===0)) { 
                        final++
                    }
                    else if ( (val-values[index+1]>0)) {
                        final++
                        }
                    else if ((val-values[index+1] >= -2) ) {
                        
                        final++
                        }
                    if (val===values[index+1]  && values[index+1] < values[index+2]) {
                        a = false
                    }})

                if (!(values.length===final)) {
                    b = false    
                }
                console.log(a);
                console.log(b);

                if (!(a && b)){
                    problem.classList.remove('hidden')
                    problem.innerHTML='sorry, invalid numerals'
                    setTimeout(() => { inputed.value='' }, 200); 
                    ans.classList.add('hidden') 
                    
                    }
                
                }
                //ends here




                
                //correcting 'V' in tune with X error
                for (let l = 0; l < box.length; l++) {
                    if (!(l===box.length)  ) {
                        if ((box[l] === 'V') &&  ((box[l+1]=== 'X')||(box[l+2]=== 'X')||(box[l+3]=== 'X')||(box[l+4]=== 'X'))) {
                            problem.classList.remove('hidden')
                            problem.innerHTML='invalid numerals'
                            setTimeout(() => { inputed.value='' }, 200); 
                            ans.classList.add('hidden')  
                            
                        }
                        else if((box[l] === '-V') &&  ((box[l+1]=== '-X')||(box[l+2]=== '-X')||(box[l+3]=== '-X')||(box[l+4]=== '-X'))){
                            problem.classList.remove('hidden')
                            problem.innerHTML='invalid numerals'
                            setTimeout(() => { inputed.value='' }, 200); 
                            ans.classList.add('hidden')

                        }

                       }}
                //ends here
                
                //correcting (main) error
                let valued = []
                box.forEach((numeral) => {

                    letters.forEach((word,i) => {
                        if (word === numeral) {valued.push(i+1)}  });      
                    })
                    console.log(valued)
                valued.forEach((val, index)=>{
                    
                    if (((val-valued[index+1]===-1) && (valued[index+1]-valued[index+2]===1) )) {
                        
                        problem.classList.remove('hidden')
                        problem.innerHTML='----invalid numerals'
                        setTimeout(() => { inputed.value='' }, 200);  
                        ans.classList.add('hidden')    
                    }

                    })
                //ends here

            
            //cancelling repetition 
             if (!(+nums.join(''))) {
                for (let l = 0; l < box.length; l++) {
                    if ((l<=box.length)  ) {
                        
                        if ((box[l] === box[l+1]) && ((box[l+1] === box[l+2]) ) && ((box[l+2] === box[l+3])) ) {
                            console.log(box[l],box[l+1],box[l+2],box[l+3])
                            problem.classList.remove('hidden')
                            problem.innerHTML='--invalid numerals'
                            setTimeout(() => { inputed.value='' }, 200); 
                            ans.classList.add('hidden')     
                        }


                      
                }}
                
            }
             
            return box
            
            //ends here


        }


            
                
                
            
    

    console.log(words.join(''),nums, box.length);
    
           
    }

function solver(question,num_list,letters) {

    if (question  && problem.classList.contains('hidden')) {
    sets = [1,5,10,50,100,500,1000,5000,10000, 50000, 100000, 500000, 1000000]
        if ((+question.join(''))===0) {
            console.log ([ question ,'nulla']);
            return [ 0,'nulla',question ]
            
        }
        else if (!(+question.join('')) && !((question === undefined))) {
            
            console.log(letters);
            string_=''
            list =[]
            list2=[]
            list3=[]
            list4=[]
            let adder = 0 
            let subtracter = 0
            
            question.forEach((val, index)=>{
                let first = 0
                let second = 0
                letters.forEach((word,i)=>{
                    if ((val === word)  ){
                        first = i
                        
                        // console.log(letters[i]);
                    }
    
                    if ((question[index+1] === letters[i])  ){
                        second = i
                        
                    }
                })
    
                if (first >= second) {
    
                    
                    
                    adder = adder + sets[first]
                    console.log(sets[first]);
                    list.push(sets[first])
                    
                }
                else if(first < second){
                    subtracter = subtracter - sets[first]
                    console.log(sets[first]);
                    list.push(sets[first])
    
    
                }
               
    
                
    
            })
            for (let item = 0; item < list.length; item++) {
                if (item < list.length) {
                    if (list[item+1] > list[item]) {
                        console.log(list[item],list[item+1]);
                        console.log('brooo');
                        list2.push(`${question[item]}${question[item+1]}`)
                        item = item+1
                        
                    }
                    else if ((list[item] === (list[item+1] && list[item+2]))) {
    
                            if (list[item+2] < list[item+3]) {
                                list2.push(`${question[item]}${question[item+1]}${question[item+2]}${question[item+3]}`)
                                item = item+3
                                
                            }
                            else{
                                list2.push(`${question[item]}${question[item+1]}${question[item+2]}`)
                                item = item+2
    
                            }
    
                        
    
                        console.log(item);
                        
                    }
                    else if ((list[item] === list[item+1])) {
                        
                        console.log('broooooooooo');
                        list2.push(`${question[item]}${question[item+1]}`)
    
                        item = item+1
                        console.log(item);
                    }
                    else{
                        list2.push(`${question[item]}`)
                    }
    
    
    
                    
                
                }
                
                
            }
            for (let x = 0; x < list.length; x++) {
                if ((list[x]===list[x+1]) && ((list[x+1] === list[x+2]))) {
                    list3.push(list[x] + list[x+1] + list[x+2])
                    list4.push(`${list[x]} + ${list[x+1]} + ${list[x+2]}`)
                    x = x+2
                }
                else if (list[x]===list[x+1]) {
                    list3.push(list[x] + list[x+1])
                    list4.push(`${list[x]} + ${list[x+1]}}`)
                    x = x+1
                }
                else if ((list[x]) < (list[x+1])) {
                    list3.push((list[x+1]) - (list[x]))
                    list4.push(`${list[x+1]} - ${list[x]}}`)
                    x = x+1   
                }
                else{
                    list3.push(list[x])
                    list4.push(list[x].toString())
                }
                
                
            }
                
                
            
            
            
            return [adder+subtracter,question.join(''), list2, list, list3,list4]
    
    
            
            
        }
        else if ((+question.join(''))) {
            let extra = 0
            let numList = []
            let main_list=[]
            let final_list = []
            let extra_list =[]
            let final_list2 = []
            let final_list3 = []
            let num_string = question.join('');
            let num_number = +question.join('')
            let num_array = question.join('').split('')

            num_array.forEach((str,index)=>{
                if (!(+str===0)) {
                    numList.push((+str)*(10**(num_string.length-index-1)))
                } 
    
            })

            for (let x = 0; x < numList.length; x++) {
                extra = numList[x]

                sets.forEach((num, index) => {
                    
                    while((num > extra) && (!(extra<=0)) ) {

                        
                        
                        if ((!(extra===(4*(10**((extra.toString().length)-1)))) && (!(extra===(9*(10**((extra.toString().length)-1))))) && (!(extra===(6*(10**((extra.toString().length)-1))))) && (!(extra===(7*(10**((extra.toString().length)-1))))) && (!(extra===(8*(10**((extra.toString().length)-1))))))) {
                            // console.log(4*(10**((extra.toString().length)-1)));
                            // console.log(extra);
                        main_list.push(letters[index-1])

                        extra = extra - sets[index-1]
                        extra_list.push(sets[index-1].toString())
                            
                        }

                        else if(((extra===(4*(10**((extra.toString().length)-1)))))){

                            console.log(4*(10**((extra.toString().length)-1)).toString());
                            
                            extra_list.push(4*(10**((extra.toString().length)-1)).toString())
                            extra = extra - ((4*(10**((extra.toString().length)-1))))

                            main_list.push(`${letters[index-1]}${letters[index]}` )

                        }
                        else if(((extra===(6*(10**((extra.toString().length)-1)))))){
                          
                            extra_list.push((6*(10**((extra.toString().length)-1))).toString())
                            extra = extra - ((6*(10**((extra.toString().length)-1))))

                            main_list.push(`${letters[index-1]}${letters[index-2]}` )

                        }
                        else if(((extra===(7*(10**((extra.toString().length)-1)))))){
                          
                            extra_list.push((7*(10**((extra.toString().length)-1))).toString())
                            extra = extra - ((7*(10**((extra.toString().length)-1))))

                            main_list.push(`${letters[index-1]}${letters[index-2]}${letters[index-2]}` )

                        }
                        else if(((extra===(8*(10**((extra.toString().length)-1)))))){
                          
                            extra_list.push((8*(10**((extra.toString().length)-1))).toString())
                            extra = extra - ((8*(10**((extra.toString().length)-1))))

                            main_list.push(`${letters[index-1]}${letters[index-2]}${letters[index-2]}${letters[index-2]}` )

                        }

                        else if(((extra===(9*(10**((extra.toString().length)-1)))))){
                          
                            extra_list.push((9*(10**((extra.toString().length)-1))).toString())
                            extra = extra - ((9*(10**((extra.toString().length)-1))))

                            main_list.push(`${letters[index-2]}${letters[index]}` )

                        }
                        





                        
                        else{
                            break
                        }   
                    }
                });
   
            }
            for (let y = 0; y < main_list.length; y++) {
                if ((main_list[y]===main_list[y+1])&&(main_list[y+1]===main_list[y+2])) {
                    final_list.push(`${main_list[y]}${main_list[y+1]}${main_list[y+2]}`)
                    final_list2.push(`${extra_list[y]} + ${extra_list[y+1]} + ${extra_list[y+2]}`)
                    final_list3.push(`${main_list[y]} + ${main_list[y+1]} + ${main_list[y+2]}`)
                    y=y+2
                }
                else if (main_list[y]===main_list[y+1]) {
                    final_list.push(`${main_list[y]}${main_list[y+1]}`)
                    final_list2.push(`${extra_list[y]} + ${extra_list[y+1]}`)
                    final_list3.push(`${main_list[y]} + ${main_list[y+1]}`)
                    y=y+1
                }
                else{
                    final_list3.push(`${main_list[y]}`)
                    final_list2.push(`${extra_list[y]}`)
                    final_list.push(`${main_list[y]}`)

                }
                
            }

            

            return [final_list,num_number,numList,final_list2,final_list3,extra_list, main_list]



            
        }
        
    }
    
    
    
}



function writeText2() {
    

    // console.log(solved.slice(0, idx));
    ans.classList.remove('hidden')
    

    
    let spliter = example2.split('')
    console.log(spliter);


   
        


        if (counter < spliter.length) {

        const piece = document.createElement('span')
        piece.innerHTML = spliter[counter]

        console.log(piece);

        ans.appendChild(piece) 
            


        console.log(counter);

            
        }

    
}
function writeText3(made) {
    console.log(made);
    console.log('hiiiiiiiiiieeeeeeeeee');

    console.log(dashed);
    
    
    dashed.forEach((dash, index)=>{
        // let sub_piece = document.createElement('div')
        // console.log(sub_piece);
        // sub_piece.innerHTML= undashed[index]
        let piece3 = document.createElement('span')
        piece3.innerHTML = piece3.innerHTML + undashed[index]

        if (dash===dashed[0]) {
            piece3.classList.add('first')  
         }

         else if (dash===dashed[dashed.length-1]) {
            piece3.classList.add('last')  
         }

         else{piece3.classList.add('normally') }

            
        
        if (dash[0]==='-') {
            piece3.classList.add('bordermaker2')  
         }
        made.appendChild(piece3)
        
        // piece3.appendChild(sub_piece)
    })
    
    
    

       
    


        
}



function writeText(with_dash_list, without_dash_list) {
    ans.classList.remove('hidden')
    
    
    
    


    if ((counter2 <= with_dash_list.length)) {
        let piece2 = document.createElement('span')
        piece2.innerHTML = without_dash_list[counter2]
        console.log(counter2);

        

        if (with_dash_list[counter2][0]==='-') {
            piece2.classList.add('bordermaker')  
        }

        ans.appendChild(piece2)
        
    }
}


function displayer(solved) {

    
    example2=''
    
    if (solved && problem.classList.contains('hidden')) {
        

         if ((solved[0]===0)) {
            ans.innerHTML=''
            counter=-1
            example2 = solved[1]


            console.log(example2.split());

            let tiral = setInterval(() => {

                counter++
                writeText2() 
                
            }, 250);

            setTimeout(() => {
                clearInterval(tiral)
                
            }, 250*(example2.split('')).length);
            return  ['now', 250*(example2.split('')).length]
            
        } 

       
        else if ((+solved[0]) && !(solved[0]===0)) {
            ans.innerHTML=''
            counter=-1

            example2 = solved[0].toString()

            console.log(example2);
            let tiral = setInterval(() => {
 
                counter++
                writeText2() 
                
            }, 250);

            setTimeout(() => {
                clearInterval(tiral)
                
            }, 250*(example2.split('')).length);
            return ['now', 250*(example2.split('')).length]
            

            
            
        }
        
        
        else if (!(+solved[0])) {
            ans.innerHTML=''
            counter2=-1
            console.log('roooooooooooooo')
           let with_dash_list = []

            let b = solved[6].join('')


            let with_dash = solved[6].join('-')



            for (let y = 0; y < b.split('').length; y++) {

                if ((b.split(''))[y]==='-') {
                    with_dash_list.push(`-${(b.split(''))[y+1]}`)

                    y=y+1
                }
                else{
                    with_dash_list.push((b.split(''))[y])
                }  
            }


            let without_dash_list = with_dash.replaceAll('-', '').split('')
            dashed = with_dash_list

    
            undashed = without_dash_list

            console.log(without_dash_list);
            console.log(with_dash_list);

            // dashed = with_dash_list

            let trial2 = setInterval(() => {

                counter2++
                writeText(with_dash_list, without_dash_list)          
            }, 250);
            setTimeout(() => {
                clearInterval(trial2)
                
                
            }, 250*(with_dash_list).length);

            ;
            return ['now', 250*(with_dash_list).length]
            

            
            
        }
        

        
    }

   
        

    
    
}

function item_creator(info) {

    

     made = document.createElement('li')
    made.classList.add('item')

    made2 = document.createElement('li')
    made2.classList.add('item')



    

    if (info && problem.classList.contains('hidden')) {



        if ((info[0]===0)) {
            let stop = false
            made.innerHTML=`
                <div class="top-button">
                    <button class="closer"><i class="fas fa-times"></i></button>
                </div>
                <p class="question">${info[0]}</p>
                <p class="answer">ans:</p>
                `

            if (list1) {
                if (list1.children.length===0) {
                    let time_element = document.createElement('p')
                    let span_element = document.createElement('span')

                    time_element.classList.add('time')
                    time_regulator1(time_element,stop)
                    span_element.innerHTML = `${info[1]}`


                    made.appendChild(time_element)
                    made.appendChild(span_element)
                    made.classList.add('item1')
                    
                    
                    
                }
                else if (list1.children.length===1) {
                    let time_element = document.createElement('p')
                    let span_element = document.createElement('span')
                    time_element.classList.add('time')
                    time_regulator2(time_element,stop)
                    span_element.innerHTML = `${info[1]}`

                    made.appendChild(time_element)
                    made.appendChild(span_element)
                    made.classList.add('item2')
                    
                    
                }
                else if (list1.children.length===2) {
                    let time_element = document.createElement('p')
                    let span_element = document.createElement('span')
                    time_element.classList.add('time')
                    time_regulator3(time_element,stop)
                    span_element.innerHTML = `${info[1]}`

                    made.appendChild(time_element)
                    made.appendChild(span_element)
                    made.classList.add('item3')
                    
                    
                }
                else if (list1.children.length>2){
                    let time_element = document.createElement('p')
                    let span_element = document.createElement('span')
                    time_element.classList.add('time')
                    time_regulator3(time_element)
                    span_element.innerHTML = `${info[0]}`
                    
                    made.appendChild(time_element)
                    made.appendChild(span_element)
                    made.classList.add(`item${list1.children.length+1}`)
    
                    
                }
            }
  
                    console.log(list1.children>1);  
                    console.log(list1.children);    
                if (((list1.children.length)>0)){
                    console.log('aleerttttttttttttttttttt');
                    list1.children[0].classList.add('marginer')

                    setTimeout(() => {
                        list1.prepend(made) 
                        list1.children[0].classList.remove('marginer')
                        list1.children[1].classList.remove('marginer')


                        if (list1.querySelector('.item2 .top-button')){
                            let button2 = list1.querySelector('.item2 .top-button')
                            let button2_element = list1.querySelector('.item2')
                        
                            button2.addEventListener('click',()=>{
                                cancel_count++

                                console.log('cancel _count is' + cancel_count);
                                
                                stop = true
                                button2_element.remove()

                                if (!(list1.children.length)) {
                                    console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                                    reducer.classList.remove('grower')
                                    reducer.classList.add('reducer')
                                    setTimeout(() => {
                                        row1.classList.add('hidden')   
                                    }, 500 );


                                    opener.addEventListener('click',()=>{

                                    
                                if ( list1.children.length && cancel_count===2) {
                                        console.log( 'number2   count greater');
                                        
                                        row1.childNodes[1].classList.remove('remove')
                                        row1.childNodes[1].classList.remove('active')
                                        row1.classList.remove('hidden')
                                        reducer.classList.add('grower')
                                        
                                        setTimeout(() => {
                                            // row.childNodes[1].classList.remove('remove')
                                            row1.childNodes[1].classList.add('active')
                                        }, 600);
            
                                        
                                    }

                                    

                                
                            })

                            if (list1.querySelector(`.item${list1.children.length} .top-button`)){
                                let button3 = list1.querySelector(`.item${list1.children.length} .top-button`)
                                console.log(button3);
                                let button3_element = list1.querySelector(`.item${list1.children.length}`)
                                console.log(button3);
                               
                                button3.addEventListener('click',()=>{
                                    cancel_count++
        
                                    console.log('cancel _count is' + cancel_count);
                                    stop = true
                                    button3_element.remove()
        
                                    if (!(list1.children.length)) {
                                        console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                                        reducer.classList.remove('grower')
                                        reducer.classList.add('reducer')
                                        setTimeout(() => {
                                            row1.classList.add('hidden')   
                                        }, 500 );
                                        
                                        opener.addEventListener('click',()=>{
        
                                        
                                        if ( list1.children.length && cancel_count===2) {
                                                console.log( 'number2   count greater');
                                                
                                                row1.childNodes[1].classList.remove('remove')
                                                row1.childNodes[1].classList.remove('active')
                                                row1.classList.remove('hidden')
                                                reducer.classList.add('grower')
                                                
                                                setTimeout(() => {
                                                    // row.childNodes[1].classList.remove('remove')
                                                    row1.childNodes[1].classList.add('active')
                                                }, 600);
                    
                                                
                                                }
        
                                        
                                    })
            
                                    }
        
                                    
            
        
                                   
                                })
                            }

                                    
                                    

                                }

                            })
                        }

                        if (list1.querySelector('.item3 .top-button')){
                            let button3 = list1.querySelector('.item3 .top-button')
                            let button3_element = list1.querySelector('.item3')
                        
                            button3.addEventListener('click',()=>{
                                cancel_count++

                                console.log('cancel _count is' + cancel_count);
                                stop = true
                                button3_element.remove()

                                if (!(list1.children.length)) {
                                    console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                                    reducer.classList.remove('grower')
                                    reducer.classList.add('reducer')
                                    setTimeout(() => {
                                        row1.classList.add('hidden')   
                                    }, 500 );
                                    
                                    opener.addEventListener('click',()=>{

                                    
                                    if ( list1.children.length && cancel_count===2) {
                                            console.log( 'number2   count greater');
                                            
                                            row1.childNodes[1].classList.remove('remove')
                                            row1.childNodes[1].classList.remove('active')
                                            row1.classList.remove('hidden')
                                            reducer.classList.add('grower')
                                            
                                            setTimeout(() => {
                                                // row.childNodes[1].classList.remove('remove')
                                                row1.childNodes[1].classList.add('active')
                                            }, 600);
                
                                            
                                            }

                                    
                                })

                                }


                            
                            })
                        }
                    }, 300)

                }
                else{
                    list1.prepend(made)

                } 

                if (list1.querySelector('.item1 .top-button')){
                    let button1 = list1.querySelector('.item1 .top-button')
                    let button1_element = list1.querySelector('.item1')
                   
                    button1.addEventListener('click',()=>{
                        cancel_count++
    
                        console.log('cancel _count is' + cancel_count);
                        
                        stop = true
                        button1_element.remove()
                        
    
                        console.log(list1.children.length);
                        if (!(list1.children.length)) {
    
                            row1.childNodes[1].classList.remove('active')
                           row1.childNodes[1].classList.add('remove')
                            reducer.classList.remove('grower')
                            reducer.classList.add('reducer')
                            
    
                            setTimeout(() => {
                                console.log('cancelor did this');
                                reducer.classList.remove('reducer') 
                                row1.classList.add('hidden') 
    
                                 
                            }, 500 );
    
                            opener.addEventListener('click',()=>{
                                 
                                    
                                 if (list1.children.length && cancel_count===2) {
                                        console.log( 'number2   count greater');
                                        
                                        row1.childNodes[1].classList.remove('remove')
                                        row1.childNodes[1].classList.remove('active')
                                        row1.classList.remove('hidden')
                                        reducer.classList.add('grower')
                                        
                                        setTimeout(() => {
                                            // row.childNodes[1].classList.remove('remove')
                                            row1.childNodes[1].classList.add('active')
                                        }, 600);
            
                                        
                                      }
            
    
    
    
    
    
    
                                
                                
    
                                
                            })
                            
    
                        }
    
                    })
                }
                


                

                

                


            
        }      
        
        else if ((+info[0]) && !(info[0]===0)){
            let btn1_element
            let btn2_element
            let btn3_element
            let btn4_element
            let button1_element
            let button2_element
            let button3_element
            let button4_element
            made.innerHTML=`
            <div class="top-button">
                <button class="closer"><i class="fas fa-times"></i></button>
            </div>
            <p class="question">${info[1]}</p>
            <p class="answer">ans:</p>
            `
            made2.innerHTML=`
            <div class="top-button">
                <button class="closer"><i class="fas fa-times"></i></button>
            </div>
            <p class="question">${info[1]}</p>
            <p class="answer">ans:</p>
            `
            
            if (list1.children.length===0) {
                let time_element = document.createElement('p')
                let span_element = document.createElement('span')
                let time_element2 = document.createElement('p')
                let span_element2 = document.createElement('span')
                time_element.classList.add('time')
                time_element2.classList.add('time')
                time_regulator1(time_element)
                time_regulator1(time_element2)
                span_element.innerHTML = `${info[0]}`
                span_element2.innerHTML = `${info[0]}`

                made.appendChild(time_element)
                made.appendChild(span_element)
                made.classList.add('item1')

                made2.appendChild(time_element2)
                made2.appendChild(span_element2)
                made2.classList.add('item1')
                
                
                
            }

            
            else if (list1.children.length===1) {
                let time_element = document.createElement('p')
                let span_element = document.createElement('span')
                let time_element2 = document.createElement('p')
                let span_element2 = document.createElement('span')
                time_element.classList.add('time')
                time_element2.classList.add('time')
                time_regulator2(time_element)
                time_regulator2(time_element2)
                span_element.innerHTML = `${info[0]}`
                span_element2.innerHTML = `${info[0]}`

                made.appendChild(time_element)
                made.appendChild(span_element)
                made.classList.add('item2')

                made2.appendChild(time_element2)
                made2.appendChild(span_element2)
                made2.classList.add('item2')
                
            }
            else if (list1.children.length===2) {
                let time_element = document.createElement('p')
                let span_element = document.createElement('span')
                let time_element2 = document.createElement('p')
                let span_element2 = document.createElement('span')
                time_element.classList.add('time')
                time_element2.classList.add('time')
                time_regulator3(time_element)
                time_regulator2(time_element2)
                span_element.innerHTML = `${info[0]}`
                span_element2.innerHTML = `${info[0]}`
                
                made.appendChild(time_element)
                made.appendChild(span_element)
                made.classList.add('item3')

                made2.appendChild(time_element2)
                made2.appendChild(span_element2)
                made2.classList.add('item3')
            }
            else if (list1.children.length>2){
                let time_element = document.createElement('p')
                let span_element = document.createElement('span')
                let time_element2 = document.createElement('p')
                let span_element2 = document.createElement('span')
                time_element.classList.add('time')
                time_element2.classList.add('time')
                time_regulator3(time_element)
                time_regulator2(time_element2)
                span_element.innerHTML = `${info[0]}`
                span_element2.innerHTML = `${info[0]}`
                
                made.appendChild(time_element)
                made.appendChild(span_element)
                made.classList.add(`item${list1.children.length+1}`)
                

                made2.appendChild(time_element2)
                made2.appendChild(span_element2)
                made2.classList.add(`item${list1.children.length+1}`)

                
            }




            
            // if (((list__2.children.length)>0)){
            //     console.log('aleerttttttttttttttttttt');
            //     list__2.children[0].classList.add('left_marginer')
            //     setTimeout(() => {
            //         list__2.prepend(made2)
            //         list__2.children[0].classList.remove('left_marginer')
            //         list__2.children[1].classList.remove('left_marginer')

            //         if (list__2.querySelector('.item2 .top-button')){
            //              btn2 = list__2.querySelector('.item2 .top-button')
            //              btn2_element = list__2.querySelector('.item2')

            //             btn2.addEventListener('click',()=>{
            //                 cancel_count++

            //                  console.log('cancel _count is' + cancel_count);
                            
            //                 stop = true
            //                 btn2_element.remove()
            //                 button2_element.remove()
                            

            //                 // for (let index= list__2.children.length ; index < 0; index--) {
            //                 //     if (index-1){
            //                 //         list__2.children[index-1].classList.add('margin_reducer')

            //                 //         break

            //                 //     }

            //                 //     else{
            //                 //         null
            //                 //     }
                                
            //                 // }


            //                 if (!(list1.children.length)) {
            //                     console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
            //                     reducer.classList.remove('grower')
            //                     reducer.classList.add('reducer')
            //                     setTimeout(() => {
            //                         row1.classList.add('hidden')   
            //                     }, 500 );
            //                 }

            //                 if (!(list__2.children.length)) {
            //                     console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
            //                     row2.classList.remove('shorter')
            //                     id_row3.style.animation =`reverse-horizon 0.5s linear`
                                

            //                     setTimeout(() => {
            //                         section2.classList.add('hidden')
            //                         row2.classList.add('enlarger')
                                    
            //                     }, 300)


            //                     opener.addEventListener('click',()=>{

                                
            //                         if ( list1.children.length && cancel_count===2) {
            //                             console.log( 'number2   count greater');
                                            
            //                             id_row3.style.animation =`horizon 0.5s linear`
            //                             setTimeout(() => {
            //                                 row2.classList.add('shorter')               
            //                             }, 300);
                                
            //                             setTimeout(() => {
            //                                 section2.classList.remove('hidden')
            //                             }, 500);
                                        
            //                         }

    
                                    
            //                     })
                                                
                                                
            //                 }
                                                
            //             })
            //         }
            //         if (list__2.querySelector('.item3 .top-button')){
            //              btn3 = list__2.querySelector('.item3 .top-button')
            //              btn3_element = list__2.querySelector('.item3')

            //             btn3.addEventListener('click',()=>{
            //                 cancel_count++

            //                  console.log('cancel _count is' + cancel_count);
                            
            //                 stop = true
            //                 btn3_element.remove()
            //                 button3_element.remove()
            //                 // for (let index= list__2.children.length ; index < 0; index--) {
            //                 //     if (index-1){
            //                 //         list__2.children[index-1].classList.add('margin_reducer')

            //                 //         break

            //                 //     }
            //                 //     else{
            //                 //         null
            //                 //     }
                                
            //                 // }

            //                 if (!(list1.children.length)) {
            //                     console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
            //                     reducer.classList.remove('grower')
            //                     reducer.classList.add('reducer')
            //                     setTimeout(() => {
            //                         row1.classList.add('hidden')   
            //                     }, 500 );


            //                 if (!(list__2.children.length)) {
            //                     console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
            //                     row2.classList.remove('shorter')
            //                     id_row3.style.animation =`reverse-horizon 0.5s linear`
            //                     setTimeout(() => {
            //                         section2.classList.add('hidden')
            //                         row2.classList.add('enlarger')
                                    
            //                     }, 300)



            //                     opener.addEventListener('click',()=>{

                                
            //                         if ( list__2.children.length && cancel_count===2) {
            //                             console.log( 'number2   count greater');
                                            
            //                             id_row3.style.animation =`horizon 0.5s linear`
            //                             setTimeout(() => {
            //                                 row2.classList.add('shorter')               
            //                             }, 300);
                                
            //                             setTimeout(() => {
            //                                 section2.classList.remove('hidden')
            //                             }, 500);
                                        
            //                         }

    
                                    
            //                     })

            //                 }                   
                                                
            //                 }
                                                
            //             })
            //         }

            //         if (list__2.querySelector(`.item${list__2.children.length} .top-button`)){
            //             btn4 = list__2.querySelector(`.item${list__2.children.length} .top-button`)
            //             btn4_element = list__2.querySelector(`.item${list__2.children.length}`)

            //             btn4.addEventListener('click',()=>{
            //                 cancel_count++

            //                  console.log('cancel _count is' + cancel_count);
                            
            //                 stop = true
            //                 btn4_element.remove()
            //                 button4_element.remove()


            //                 // for (let index= list__2.children.length ; index < 0; index--) {
            //                 //     if (index-1){
            //                 //         list__2.children[index-1].classList.add('margin_reducer')

            //                 //         break

            //                 //     }

            //                 //     else{
            //                 //         null
            //                 //     }
                                
            //                 // }

            //                 if (!(list1.children.length)) {
            //                     console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
            //                     reducer.classList.remove('grower')
            //                     reducer.classList.add('reducer')
            //                     setTimeout(() => {
            //                         row1.classList.add('hidden')   
            //                     }, 500 );
                                
            //                 }

            //                 if (!(list__2.children.length)) {
            //                     console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
            //                     row2.classList.remove('shorter')
            //                     id_row3.style.animation =`reverse-horizon 0.5s linear`
                                

            //                     setTimeout(() => {
            //                         section2.classList.add('hidden')
            //                         row2.classList.add('enlarger')
                                    
            //                     }, 300)


            //                     opener.addEventListener('click',()=>{

                                
            //                         if (list__2.children.length && cancel_count===2) {
            //                             console.log( 'number2   count greater');
                                            
            //                             id_row3.style.animation =`horizon 0.5s linear`
            //                             setTimeout(() => {
            //                                 row2.classList.add('shorter')               
            //                             }, 300);
                                
            //                             setTimeout(() => {
            //                                 section2.classList.remove('hidden')
            //                             }, 500);
                                        
            //                         }

    
                                    
            //                     })
                                                
                                                
            //                 }
                                                
            //             })

            //         }
                    
            //     }, 300);

            // }
            // else{
            //     list__2.prepend(made2)

            // }
            // if (list__2.querySelector(`.item1 .top-button`)){
            //      btn1 = list__2.querySelector(`.item1 .top-button`)
            //      btn1_element = list__2.querySelector(`.item1`)

            //     btn1.addEventListener('click',()=>{
            //         cancel_count++

            //          console.log('cancel _count is' + cancel_count);
                    
            //         stop = true
            //         btn1_element.remove()
            //         button1_element.remove()
                    


            //         if (!(list1.children.length)) {

            //             row1.childNodes[1].classList.remove('active')
            //            row1.childNodes[1].classList.add('remove')
            //             reducer.classList.remove('grower')
            //             reducer.classList.add('reducer')
                        

            //             setTimeout(() => {
            //                 console.log('cancelor did this');
            //                 reducer.classList.remove('reducer') 
            //                 row1.classList.add('hidden') 
            //             }, 500 );

            //         }

            //         if (!(list__2.children.length)) {
            //             console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
            //             row2.classList.remove('shorter')
            //             id_row3.style.animation =`reverse-horizon 0.5s linear`
            //             setTimeout(() => {
            //                 section2.classList.add('hidden')
            //                 row2.classList.add('enlarger')
                            
            //             }, 300)

                        
            //             opener.addEventListener('click',()=>{
                            
            //                 console.log( ` count ${cancel_count}`);
                        
            //                 if ( list__2.children.length && cancel_count===2) {
            //                     console.log( 'number2   count greater');
                                    
            //                     id_row3.style.animation =`horizon 0.5s linear`
            //                     setTimeout(() => {
            //                         row2.classList.add('shorter')               
            //                     }, 300);
                        
            //                     setTimeout(() => {
            //                         section2.classList.remove('hidden')
            //                     }, 500);
                                
            //                     // cancel_count=1
            //                 }

                            
            //                 // cancel_count2++




                            
            //             })
                                        
                                        
            //         }
                                        
            //     })

            // }
            
            

            if (((list1.children.length)>0)){
                
                list1.children[0].classList.add('marginer')

                setTimeout(() => {
                    list1.prepend(made) 
                    list1.children[0].classList.remove('marginer')
                    list1.children[1].classList.remove('marginer')



                    


                    if (list1.querySelector('.item2 .top-button')){
                        button2 = list1.querySelector('.item2 .top-button')
                        button2_element = list1.querySelector('.item2')
                       
                        button2.addEventListener('click',()=>{
                            cancel_count++

                             console.log('cancel _count is' + cancel_count);
                            
                            stop = true
                            button2_element.remove()
                            // btn2_element.remove()

                            // if (!(list__2.children.length)) {
                            //     console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                            //     row2.classList.remove('shorter')
                            //     id_row3.style.animation =`reverse-horizon 0.5s linear`
                            // }
                            

                            if (!(list1.children.length)) {
                                console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                                reducer.classList.remove('grower')
                                reducer.classList.add('reducer')
                                setTimeout(() => {
                                    row1.classList.add('hidden')   
                                }, 500 );

                            


                                opener.addEventListener('click',()=>{

                                
                             if ( list1.children.length && cancel_count===2) {
                                    console.log( 'number2   count greater');
                                    
                                    row1.childNodes[1].classList.remove('remove')
                                    row1.childNodes[1].classList.remove('active')
                                    row1.classList.remove('hidden')
                                    reducer.classList.add('grower')
                                    
                                    setTimeout(() => {
                                        // row.childNodes[1].classList.remove('remove')
                                        row1.childNodes[1].classList.add('active')
                                    }, 600);
        
                                    
                                  }

                            
                        })

                                
                                
    
                            }
    
                        })
                    }

                    if (list1.querySelector('.item3 .top-button')){
                        button3 = list1.querySelector('.item3 .top-button')
                        button3_element = list1.querySelector('.item3')
                       
                        button3.addEventListener('click',()=>{
                            cancel_count++

                            console.log('cancel _count is' + cancel_count);
                            stop = true
                            button3_element.remove()
                            // btn3_element.remove()


                            // if (!(list__2.children.length)) {
                            //     console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                            //     row2.classList.remove('shorter')
                            //     id_row3.style.animation =`reverse-horizon 0.5s linear`
                            // }
                                


                            if (!(list1.children.length)) {
                                console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                                reducer.classList.remove('grower')
                                reducer.classList.add('reducer')
                                setTimeout(() => {
                                    row1.classList.add('hidden')   
                                }, 500 );
                                
                                opener.addEventListener('click',()=>{

                                
                                if ( list1.children.length && cancel_count===2) {
                                        console.log( 'number2   count greater');
                                        
                                        row1.childNodes[1].classList.remove('remove')
                                        row1.childNodes[1].classList.remove('active')
                                        row1.classList.remove('hidden')
                                        reducer.classList.add('grower')
                                        
                                        setTimeout(() => {
                                            // row.childNodes[1].classList.remove('remove')
                                            row1.childNodes[1].classList.add('active')
                                        }, 600);
            
                                        
                                        }

                                
                            })
    
                            }

                            
    

                           
                        })
                    }

                    if (list1.querySelector(`.item${list1.children.length} .top-button`)){
                        button4 = list1.querySelector(`.item${list1.children.length} .top-button`)
                        button4_element = list1.querySelector(`.item${list1.children.length}`)
                        
                       
                        button4.addEventListener('click',()=>{
                            cancel_count++

                            console.log('cancel _count is' + cancel_count);
                            stop = true
                            button4_element.remove()
                            // btn4_element.remove()

                            // if (!(list__2.children.length)) {
                            //     console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                            //     row2.classList.remove('shorter')
                            //     id_row3.style.animation =`reverse-horizon 0.5s linear`
                            
                                

                            //     setTimeout(() => {
                            //         section2.classList.add('hidden')
                            //         row2.classList.add('enlarger')
                                    
                            //     }, 300)

                            // }

                            if (!(list1.children.length)) {
                                console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                                reducer.classList.remove('grower')
                                reducer.classList.add('reducer')
                                setTimeout(() => {
                                    row1.classList.add('hidden')   
                                }, 500 );
                                
                                opener.addEventListener('click',()=>{

                                
                                if ( list1.children.length && cancel_count===2) {
                                        console.log( 'number2   count greater');
                                        
                                        row1.childNodes[1].classList.remove('remove')
                                        row1.childNodes[1].classList.remove('active')
                                        row1.classList.remove('hidden')
                                        reducer.classList.add('grower')
                                        
                                        setTimeout(() => {
                                            // row.childNodes[1].classList.remove('remove')
                                            row1.childNodes[1].classList.add('active')
                                        }, 600);
            
                                        
                                        }

                                
                            })
    
                            }

                            
    

                           
                        })
                    }
                }, 300)

            }
            else{
                list1.prepend(made)
            } 
            if (list1.querySelector('.item1 .top-button')){
                button1 = list1.querySelector('.item1 .top-button')
                button1_element = list1.querySelector('.item1')
               
                button1.addEventListener('click',()=>{
                    cancel_count++

                    console.log('cancel _count is' + cancel_count);
                    
                    stop = true
                    button1_element.remove()
                    // btn1_element.remove()
                    

                    console.log(list1.children.length);

                    // if (!(list__2.children.length)) {
                    //     console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                    //     row2.classList.remove('shorter')
                    //     id_row3.style.animation =`reverse-horizon 0.5s linear`
                        

                    //     setTimeout(() => {
                    //         section2.classList.add('hidden')
                    //         row2.classList.add('enlarger')
                            
                    //     }, 300)
                    // }
                    if (!(list1.children.length)) {

                        row1.childNodes[1].classList.remove('active')
                       row1.childNodes[1].classList.add('remove')
                        reducer.classList.remove('grower')
                        reducer.classList.add('reducer')
                        

                        setTimeout(() => {
                            console.log('cancelor did this');
                            reducer.classList.remove('reducer') 
                            row1.classList.add('hidden') 

                             
                        }, 500 );

                        opener.addEventListener('click',()=>{
                             
                                
                             if (list1.children.length && cancel_count===2) {
                                    console.log( 'number2   count greater');
                                    
                                    row1.childNodes[1].classList.remove('remove')
                                    row1.childNodes[1].classList.remove('active')
                                    row1.classList.remove('hidden')
                                    reducer.classList.add('grower')
                                    
                                    setTimeout(() => {
                                        // row.childNodes[1].classList.remove('remove')
                                        row1.childNodes[1].classList.add('active')
                                    }, 600);

                                    // cancel_count=1
        
                                    
                                  }
        

                        })
                        

                    }

                })
            }    
        



        }
        else if (!(+info[0])) {
            

            made.innerHTML=`
            <div class="top-button">
                <button class="closer"><i class="fas fa-times"></i></button>
            </div>
            <p class="question">${info[1]}</p>
            <p class="answer">ans:</p>
            `
            console.log(list1)
            if (list1) {
                if (list1.children.length===0) {
                    let time_element = document.createElement('p')
                    time_element.classList.add('time')
                    time_regulator1(time_element)
                    made.appendChild(time_element)
                    writeText3(made)
                    made.classList.add('item1')
                    
                    
                }
                else if (list1.children.length===1) {
                    let time_element = document.createElement('p')
                    time_element.classList.add('time')
                    time_regulator2(time_element)
                    made.appendChild(time_element)
                    writeText3(made)
                    made.classList.add('item2')
                    
                }
                else if (list1.children.length===2) {
                    let time_element = document.createElement('p')
                    
                    time_element.classList.add('time')
                    time_regulator3(time_element)
                    made.appendChild(time_element)
                    writeText3(made)
                    made.classList.add('item3')
                    
                }

                else if (list1.children.length>2){
                    let time_element = document.createElement('p')
                    time_element.classList.add('time')
                    time_regulator3(time_element)
                    made.appendChild(time_element)
                    writeText3(made)
                    made.classList.add(`item${list1.children.length+1}`)
    
                    
                }
            }
 

                console.log(list1.children>1);  
                console.log(list1.children);    
            if (((list1.children.length)>0)){
                console.log('aleerttttttttttttttttttt');
                list1.children[0].classList.add('marginer')

                setTimeout(() => {
                    list1.prepend(made) 
                    list1.children[0].classList.remove('marginer')
                    list1.children[1].classList.remove('marginer')


                    if (list1.querySelector('.item2 .top-button')){
                        let button2 = list1.querySelector('.item2 .top-button')
                        let button2_element = list1.querySelector('.item2')
                       
                        button2.addEventListener('click',()=>{
                            
                            stop = true
                            button2_element.remove()

                            if (!(list1.children.length)) {
                                console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                                reducer.classList.remove('grower')
                                reducer.classList.add('reducer')
                                setTimeout(() => {
                                    row1.classList.add('hidden')   
                                }, 500 );
                                
    
                            }
    
                        })
                    }

                    if (list1.querySelector('.item3 .top-button')){
                        let button3 = list1.querySelector('.item3 .top-button')
                        let button3_element = list1.querySelector('.item3')
                       
                        button3.addEventListener('click',()=>{
                            stop = true
                            button3_element.remove()

                            if (!(list1.children.length)) {
                                console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                                reducer.classList.remove('grower')
                                reducer.classList.add('reducer')
                                setTimeout(() => {
                                    row1.classList.add('hidden')   
                                }, 500 );
                                
    
                            }
    

                           
                        })
                    }

                    if (list1.querySelector(`.item${list1.children.length} .top-button`)){
                        let button3 = list1.querySelector(`.item${list1.children.length} .top-button`)
                        console.log(button3);
                        let button3_element = list1.querySelector(`.item${list1.children.length}`)
                        console.log(button3);
                       
                        button3.addEventListener('click',()=>{
                            cancel_count++

                            console.log('cancel _count is' + cancel_count);
                            stop = true
                            button3_element.remove()

                            if (!(list1.children.length)) {
                                console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                                reducer.classList.remove('grower')
                                reducer.classList.add('reducer')
                                setTimeout(() => {
                                    row1.classList.add('hidden')   
                                }, 500 );
                                
                                opener.addEventListener('click',()=>{

                                
                                if ( list1.children.length && cancel_count===2) {
                                        console.log( 'number2   count greater');
                                        
                                        row1.childNodes[1].classList.remove('remove')
                                        row1.childNodes[1].classList.remove('active')
                                        row1.classList.remove('hidden')
                                        reducer.classList.add('grower')
                                        
                                        setTimeout(() => {
                                            // row.childNodes[1].classList.remove('remove')
                                            row1.childNodes[1].classList.add('active')
                                        }, 600);
            
                                        
                                        }

                                
                            })
    
                            }

                            
    

                           
                        })
                    }
                    
                }, 300)

            }
            else{
                list1.prepend(made)

            }  
            
            if (list1.querySelector('.item1 .top-button')){
                let button1 = list1.querySelector('.item1 .top-button')
                let button1_element = list1.querySelector('.item1')
               
                button1.addEventListener('click',()=>{
                    stop = true
                    button1_element.remove()

                    console.log(list1.children.length);
                    if (!(list1.children.length)) {
                        console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                        reducer.classList.remove('grower')

                        reducer.classList.add('reducer')

                        setTimeout(() => {
                            row1.classList.add('hidden')   
                        }, 500 );
                        
                        
                    }

                })
            }
            
        }

        
    }

    
    

}


opener.addEventListener('click', ()=>{
    
    

    
    console.log(signaler);
    
    if (signaler==='now' && list1.children.length > 0) {

        clicked++
        let size = document.body.offsetWidth
        if (clicked===1 && size>750) {
            pointer2.remove()
            

            setTimeout(() => {
                pointer.classList.remove('hidden')
                setTimeout(() => {
                    pointer.childNodes[1].classList.add('fader')
                    setTimeout(() => {
                        pointer.remove()
                        notification.remove()  
                    }, 1000);
                }, 5000);
            }, 1500);

            
            

            
        }
        else if (clicked===1 && size<=750){
            pointer.remove()
            setTimeout(() => {
                pointer2.classList.remove('hidden')
                setTimeout(() => {
                    pointer2.childNodes[1].classList.add('fader')
                    setTimeout(() => {  
                        pointer2.remove()
                        notification.remove() 
                    }, 1000);
                }, 5000);
            }, 1500);

        }
        else if (clicked > 1  && size>750) {
            pointer2.remove()
            setTimeout(() => {
                pointer.childNodes[1].classList.add('fader')
                setTimeout(() => {
                    pointer.remove()  
                    notification.remove() 
                }, 300);
            }, 10); 
        
        }
        else if (clicked > 1  && size<=750) {
            pointer.remove()
            setTimeout(() => {
                
                pointer2.childNodes[1].classList.add('fader')
                setTimeout(() => {
                    pointer2.remove()
                    notification.remove() 
                }, 500);
            }, 500); 
        
        }

        else if (clicked>2) {
            clicked = undefined
            
        }


        


        if ( !(reducer.classList.contains('grower')) && row1.classList.contains('hidden') &&  !(row1.childNodes[1].classList.contains('remove') || row1.childNodes[1].classList.contains('active')) ) {
            console.log( 'A did this');
            // row3.classList.toggle('hidden')
            row1.classList.remove('hidden')

            row2.classList.add('shorter')
            
            setTimeout(() => {
                section2.classList.remove('hidden')
            }, 200);
             reducer.classList.add('grower')
            
            setTimeout(() => {
                // row.childNodes[1].classList.remove('remove')
                row1.childNodes[1].classList.add('active')
            }, 600);

            
    
    
            
        }
    
        else if ( !(reducer.classList.contains('reducer')) && !(row1.classList.contains('hidden')) &&  ( row1.childNodes[1].classList.contains('active') && !(row1.childNodes[1].classList.contains('remove'))) ) {
            console.log( 'B did this');
            row2.classList.remove('shorter')
            id_row3.style.animation =`reverse-horizon 0.5s linear`
            // row2.classList.add('enlarger')
            row1.childNodes[1].classList.remove('active')
            row1.childNodes[1].classList.add('remove')
            reducer.classList.remove('grower')
           


            setTimeout(() => {
                section2.classList.add('hidden')
                row2.classList.add('enlarger')
                
            }, 300);
    
            setTimeout(() => {
                reducer.classList.add('reducer')   
            }, 500);
            
            setTimeout(() => {
                // section2.classList.toggle('hidden')
                row1.classList.add('hidden')
            }, 1000);

            
            
            
            
        }
    
        else if( !(reducer.classList.contains('grower')) && row1.classList.contains('hidden')  && (row1.childNodes[1].classList.contains('remove') && !(row1.childNodes[1].classList.contains('active')))){
            console.log( 'C did this');
            row2.classList.remove('enlarger')     
            id_row3.style.animation =`horizon 0.5s linear`
            reducer.classList.remove('reducer')
            row1.classList.remove('hidden')
            reducer.classList.add('grower')
            setTimeout(() => {
                row2.classList.add('shorter')               
            }, 300);
    
            setTimeout(() => {
                // row.childNodes[1].classList.remove('remove')
                row1.childNodes[1].classList.remove('remove')
                row1.childNodes[1].classList.add('active')
                section2.classList.remove('hidden')
            }, 500);
            
        }

        
        
    }


    

    


    
    

    

    
    
    
})

function notif(signal=1) {
    

    

    if (signal[0]==='now' && (!(signal[0]===undefined))) {
        console.log(signal[1]);
        setTimeout(() => {
            notification.classList.remove('hidden')
            signaler='now'
            
        }, signal[1]);

    
    
        
        // pointer.classList.remove('hidden')
        
    }
    
}
    
   


form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let vals = inputed.value.toUpperCase().split('') ;
    // console.log(vals)
    
    let letters=['I','V','X','L','C','D','M','-V','-X','-L','-C','-D','-M']
    let num_list = ['1','2','3','4','5','6','7','8','9','0','-1','-2','-3','-4','-5','-6','-7','-8','-9','-0']
    box=[]

    for (let index = 0; index < vals.length; index++) {
        if (vals[index]==='-' && index<vals.length-1){
            box.push(`-${vals[index+1]}`)

            index = index + 1
        }
        else{
            box.push(vals[index])
        }  
    }

    if (box[box.length-1]==='-') {
      
        box.pop()  
    }
    box1=box
    console.log(box1)

    const question = checker(letters , num_list)
    // console.log(questions);

    const solved = solver(question,num_list,letters)
    const displayed =displayer(solved)

    console.log(displayed);
    
    console.log(solved)
    item_creator(solved)
    notif(displayed)
    

})



