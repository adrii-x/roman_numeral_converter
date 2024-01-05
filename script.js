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
const section3 = document.querySelector('.section3')
const section2 = document.querySelector('.section2')
const section1 = document.querySelector('.section1')
const monitor = document.getElementById('monitor')
const copy = document.querySelector('.copy')
const remover  = document.querySelector('.cancel')
const reseter  = document.querySelector('.reset')
const pointer2 = document.querySelector('.section2 .pointer')
const opener_container = document.querySelector('.row2 .top-button')
const phase1 = document.querySelector('.phase1')
const phase2 = document.querySelector('.phase2')
const phase0_1 = document.querySelector('.phase0_1')
const phase0_2 = document.querySelector('.phase0_2')
const button_container2 = document.querySelector('.button_container2')
const go_back = document.querySelector('.go_back')
const contents_t1 = document.querySelectorAll('.content.t1')
const contents_t2 = document.querySelector('.content.t2')
const heading_t1 = document.querySelector('.heading.t1')
const the_ans_t1 = document.querySelector('.The_ans.t1')





console.log(monitor);
console.log(list__2);
console.log(list1.childNodes);
console.log(list1.childNodes);
console.log(pointer2.childNodes);
console.log(document.body.offsetWidth)
let solved
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
let clicker = 1;
let marker_1 = 1;
let marker_2 = 1;
let marker_3 = 1;
let marker_1_2nd = 1;
let marker_2_2nd = 1;
let marker_3_2nd = 1;
let marker_1_3rd = 1;
let marker_2_3rd = 1;
let marker_3_3rd = 1;
let w = 0
let numbered=1
let subtracted
let added
let reload_checker 
let current_time = Date.now()
let reload_time = window.performance.timeOrigin
let boxer2= []
let rev_solved_accumulator = [] 
let number_of_list_items = rev_solved_accumulator.length

let activities =[]

let sections = []
let amount_of_element = []


function mode_reseseter() {
    htmll= document.querySelector('html')
    let retrieved_mode = JSON.parse(localStorage.getItem('mode_stored'))
    if (retrieved_mode) {
        console.log(retrieved_mode);  

        if (retrieved_mode ==='Dark Mode') {
            mode.innerHTML = 'Light Mode';
            htmll.classList.add('dark')
            
        }
        else{
            mode.innerHTML = 'Dark Mode';
            htmll.classList.remove('dark')
        }
    }
}


mode_reseseter()



function activity_listener() {
    if (!(problem.classList.contains('hidden'))) {
        activities[0] = problem.innerHTML
        
    }
    else{
        activities[0] = 'hidden'
    }
    if (!(ans.classList.contains('hidden'))) {
       
            activities[1] = ans.innerHTML
            console.log(ans);

            console.log(activities[1]);
        
        
        
    }
    else{
        activities[1] = 'hidden'
    }


    if (reducer) {

        if (!(reducer.classList[1])) {
            activities[2]='' 
        }
        else{
            activities[2] = reducer.classList[1]
        }
        
    }

    if (row1.classList.contains('hidden')) {
        activities[3] = 'hidden' 
    }
    else{ 
        activities[3] = ''
    }

    if (row2) {

        console.log(row2.classList);

        if (!(row2.classList[1])) {
            activities[4]='' 
        }
        else{
            activities[4] = row2.classList[1]
        }   
    }
    

    if (section2.classList.contains('hidden')) {
        activities[5] = 'hidden' 
    }
    else{ 
        activities[5] =  ''
    }

    if ((!(row3.style.animation = '0.5s linear 0s 1 normal none running horizon')) || (!(row3.style.animation = '0.5s linear 0s 1 normal none running reverse-horizon'))) {
        activities[6] = '' 
    }
    else if (((row3.style.animation = '0.5s linear 0s 1 normal none running horizon'))) {
        activities[6] = '0.5s linear 0s 1 normal none running horizon' 
    }
    else{ 
        activities[6] =  '0.5s linear 0s 1 normal none running reverse-horizon'
    }

    

    console.log(activities); 
}

function activity_updater() {
    localStorage.setItem('activity_listening',JSON.stringify(activities))  
}

function section_listener(){
    if (section1) {

        if (!(section1.classList[1]==='dont_show') && !(section1.classList[2]==='dont_show') && !(section1.classList[3]==='dont_show') ) {
            sections[0]='' 
        }
        else{
            sections[0] = 'dont_show'
        }    
    }

    if (section2) {

        if (!(section2.classList[1]==='dont_show') && !(section2.classList[2]==='dont_show') && !(section2.classList[3]==='dont_show') ) {
            sections[1]='' 
        }
        else{
            sections[1] = 'dont_show'
        }    
    }
    if (section3) {

        if (!(section3.classList[1]==='dont_show') && !(section3.classList[2]==='dont_show') && !(section3.classList[3]==='dont_show') ) {
            sections[2]='' 
        }
        else{
            sections[2] = 'dont_show'
        } 
    }   
    
    console.log(sections);
}

function section_updater() {
    localStorage.setItem('section_listening',JSON.stringify(sections))  
}

function section_transitioning2() {
    console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
    pointer2.remove()
    pointer.remove()
    notification.remove() 
    row2.classList.remove('shorter')
    
    id_row3.style.animation =`reverse-horizon 0.5s linear`
    setTimeout(() => {
            phase2.classList.add('hidden')
            phase0_2.classList.add('hidden')
            section2.classList.add('hidden')
            row2.classList.add('enlarger')      
    }, 300)  
    
    reducer.classList.add('reducer') 
    row1.childNodes[1].classList.remove('active')
    reducer.classList.remove('grower')
    setTimeout(() => {
        row1.classList.add('hidden')
        row1.childNodes[1].classList.add('remove')  
    }, 500);

    setTimeout(() => {
        form.classList.add('fade')
    }, 700);
    setTimeout(() => {
        remover.classList.add('fade')
        
    }, 1200);
    setTimeout(() => {
        reseter.classList.add('fade')
        
    }, 1500);
    setTimeout(() => {
        copy.classList.add('fade') 
        row2.classList.add('shadow')       
    }, 1800);
    setTimeout(() => {
        ans.classList.add('fade2')
        opener_container.classList.add('fade2') 
        // section1.classList.add('fade')      
    }, 2100);
    setTimeout(() => {
        section3.classList.remove('dont_show')
        section1.classList.add('dont_show')
        section2.classList.add('dont_show')
        phase0_1.classList.remove('hidden')
        section_listener()
        section_updater()
    }, 2500);
    setTimeout(() => {
        ans.classList.remove('fade2')
        copy.classList.remove('fade')
        reseter.classList.remove('fade')
        form.classList.remove('fade')
        row2.classList.remove('shadow')
        opener_container.classList.remove('fade2')
        remover.classList.remove('fade')



        
    }, 5500);                         
                        
    
}

function section_transitioning1() {
    console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
    pointer2.remove()
    pointer.remove()
    notification.remove() 
    row2.classList.remove('shorter')
    
    id_row3.style.animation =`reverse-horizon 0.5s linear`
    setTimeout(() => {
            phase1.classList.add('hidden')
            phase0_1.classList.add('hidden')
            section2.classList.add('hidden')
            row2.classList.add('enlarger')      
    }, 300)  
    
    reducer.classList.add('reducer') 
    row1.childNodes[1].classList.remove('active')
    reducer.classList.remove('grower')
    setTimeout(() => {
        row1.classList.add('hidden')
        row1.childNodes[1].classList.add('remove')  
    }, 500);

    setTimeout(() => {
        form.classList.add('fade')
    }, 700);
    setTimeout(() => {
        remover.classList.add('fade')
        
    }, 1200);
    setTimeout(() => {
        reseter.classList.add('fade')
        
    }, 1500);
    setTimeout(() => {
        copy.classList.add('fade') 
        row2.classList.add('shadow')       
    }, 1800);
    setTimeout(() => {
        ans.classList.add('fade2')
        opener_container.classList.add('fade2') 
        // section1.classList.add('fade')      
    }, 2100);
    setTimeout(() => {
        section3.classList.remove('dont_show')
        section1.classList.add('dont_show')
        section2.classList.add('dont_show')
        phase0_2.classList.remove('hidden')
        section_listener()
        section_updater()
    }, 2500);
    setTimeout(() => {
        ans.classList.remove('fade2')
        copy.classList.remove('fade')
        reseter.classList.remove('fade')
        form.classList.remove('fade')
        row2.classList.remove('shadow')
        opener_container.classList.remove('fade2')
        remover.classList.remove('fade')



        
    }, 5500);                         
                        
    
}


function update_mode() {
    let mode_stored =''
  
  if (mode.innerHTML.match('Dark')) {
      mode_stored='Light Mode' 
    }
  else{
      mode_stored='Dark Mode'
  }
  
  localStorage.setItem('mode_stored',JSON.stringify(mode_stored))
  }



function Number_of_items(number_of_items) {
    console.log(number_of_items);
    localStorage.setItem('number_of_items',JSON.stringify(number_of_items))

 
  }

function lists_2() {
    let l_box = []
    let lii = list__2.querySelectorAll('.item')
    lii.forEach(l => {
        l_box.push(l.children) 
    });
    
    localStorage.setItem('list__2',JSON.stringify(l_box))

 
}

function lists_1() {
    let l_box = []
    let lii = list1.querySelectorAll('.item')
    lii.forEach(l => {
        l_box.push(l) 
    });
    
    localStorage.setItem('list__1',JSON.stringify(l_box))

 
}



  function solvings() {
    console.log('hiiiiii');
        console.log(rev_solved_accumulator);
        
        localStorage.setItem('solved',JSON.stringify(rev_solved_accumulator))
         
  }
  
  
  Number_of_items(list__2.children.length)
  update_mode()
  activity_listener()
  activity_updater()
  section_listener()
  section_updater()

if ((current_time-reload_time) < 1000){
    reload_checker = true
    console.log(reload_checker);
    
}

remover.addEventListener('click', ()=>{

    

    let boxer = []
    let boxer2 = []
    let list_button = list__2.querySelectorAll(`.item`)
    let list_top = list1.querySelectorAll(`.item`)
    let item_bottom
    let item_top
    

    if (list_button.length > 0) {
        list_button.forEach((btn,index)=>{
            if (btn.classList[1][5]) {
                boxer.push(btn.classList[1][4]+btn.classList[1][5]);
                
            }
            else{
                boxer.push((btn.classList[1][4]))
                
            }
            
            
            })
        list_top.forEach((btn,index)=>{
            if (btn.classList[1][5]) {
                boxer2.push(btn.classList[1][4]+btn.classList[1][5]);
                
            }
            else{
                boxer2.push((btn.classList[1][4]))
                
            }
            
            })

        console.log(boxer);
        console.log(boxer2);
    
        item_bottom= list__2.querySelector(`.item${boxer[boxer.length - 1]}`)
        console.log(item_bottom);
        item_top= list1.querySelector(`.item${boxer2[boxer2.length - 1]}`)
        
        
    }
    
    subtracted--
    pointer2.remove()
    pointer.remove()
    notification.remove() 
    
    stop = true


        if ((list1.children.length)<=1) {
            item_top.remove()
            reducer.classList.add('reducer') 
            row1.childNodes[1].classList.remove('active')
            reducer.classList.remove('grower')
            setTimeout(() => {
            row1.classList.add('hidden')
            row1.childNodes[1].classList.add('remove')  
            }, 500);
        }
        else{
            item_top.remove()
        }

        
        if ((((list__2.children.length)<= 1))) {
            item_bottom.remove()
            row2.classList.remove('shorter')
            id_row3.style.animation =`reverse-horizon 0.5s linear`
        
            
            setTimeout(() => {
                section2.classList.add('hidden')
                row2.classList.add('enlarger')
            }, 300)             
        }

        else{
            item_bottom.remove()
            let listed2 = list__2.querySelectorAll('.item')
            // console.log(listed2.length);
            // console.log(listed2);
            for (let i = 0; i < listed2.length; i++) {

                // console.log(listed2[i]);
                if (listed2[i].classList.contains('hidden')){
                // console.log(listed2[i]);
                listed2[i].classList.remove('hidden')
                listed2[i].classList.add('margin_reducer')
                break 
                }  
                
            }
        }
        setTimeout(() => {
            console.log(list__2.children.length);
            console.log(boxer);
            console.log(boxer2); 
            
        }, 1000);

    
        
    Number_of_items(list__2.children.length)
    lists_2()
    
    
})

go_back.addEventListener('click', ()=>{
    const circle = document.createElement('span') 
        circle.classList.add('ripple_circle')

        circle.style.top = 50 + '%'
        circle.style.left = 50 + '%'
        go_back.appendChild(circle)

        setTimeout(() => {
            circle.remove()
        }, 500);

    contents_t2.classList.add('move_left')

    contents_t1.forEach((content,index)=>{

        if ((index+2)%2) {
            console.log((index+2)%2);
            content.classList.add('move_left')  
            content.style.animationDelay=`${0.1*(index + 2)}s`;
        }
        else{
            content.classList.add('move_right') 
            content.style.animationDelay=`${0.1*(index + 2)}s`;
        }

    })
    setTimeout(() => {
        section3.classList.add('fade2') 
    }, 1000);
    setTimeout(() => {
        row2.classList.add('shadow')
        row2.style.boxShadow = `-5px 0px 5px 5px rgba(22, 22, 22, 0.3), -4px -3px 6px  2px var(--modifier)`
    }, 300);
    setTimeout(() => {
        row2.classList.remove('shadow')
        section3.classList.add('dont_show')
        section1.classList.remove('dont_show')
        section2.classList.remove('dont_show')
        row2.classList.add('unfade2')


    }, 1500);
    setTimeout(() => {
        row2.classList.remove('unfade2')
        row2.classList.add('unshadow')
        row2.classList.remove('enlarger')

    }, 2000);
    setTimeout(() => {

        
        phase1.classList.add('hidden')   
        
        phase2.classList.add('hidden')  
        
        row2.classList.remove('unshadow')
        row2.style.boxShadow = `0px 5px 5px 5px rgba(22, 22, 22, 0.3), 3px 4px 5px  2px var(--modifier)`
        section3.classList.remove('fade2') 

        contents_t1.forEach((content,index)=>{

            if (content.classList.contains('move_left')) {
                content.classList.remove('move_left')
                
            }
            else{
                content.classList.remove('move_right')
            }
        })

        

        contents_t2.classList.remove('move_left')
        
    }, 2500);

})

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

function time_regulator2(time_element,stop) {
    
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
        
        
    }, 1000);

    if (stop===true) {
        clearInterval(interval)
    }

    
}

function time_regulator3(time_element,stop) {
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
        
        
    }, 1000);


    if (stop===true) {
        clearInterval(interval)
    }
}

function list_counted(added,subtracted) {



    
        monitor.classList.remove('hidden')
        let counted_list2 = []

    
        if (added-subtracted>3) {
            let cnt_interval = setInterval(() => {
                let listed4 = list__2.querySelectorAll('.item')
                
                counted_list2.push((listed4.length) - subtracted)
                monitor.innerHTML= counted_list2[counted_list2.length-1]
        
        
                if (((listed4.length) - subtracted)<4) {
                    clearInterval(cnt_interval)
                    setTimeout(() => {
                        monitor.classList.add('cancelled')     
                    }, 125);
                    monitor.classList.add('hidden')
                    monitor.classList.remove('cancelled') 
         
                }
            
            }, 400)
            
        }
        
    


    
}
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
    update_mode()
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

function solver(question,letters) {

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
            let list5=[]
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
                        list2.push(`( ${question[item]}${question[item+1]} )`)
                        list5.push(`( ${question[item+1]} - ${question[item]} )`)
                        item = item+1
                        
                    }
                    else if ((list[item] === (list[item+1] && list[item+2]))) {
    
                            if (list[item+2] < list[item+3]) {
                                list2.push(`( ${question[item]}${question[item+1]}${question[item+2]}${question[item+3]} )`)
                                list5.push(`( ${question[item]} + ${question[item+1]} + ${question[item+2]} + ${question[item+3]} )`)
                                item = item+3
                                
                            }
                            else{
                                list2.push(`( ${question[item]}${question[item+1]}${question[item+2]} )`)
                                list5.push(`( ${question[item]} + ${question[item+1]} + ${question[item+2]} )`)
                                item = item+2
    
                            }
    
                        
    
                        console.log(item);
                        
                    }
                    else if ((list[item] === list[item+1])) {
                        
                        console.log('broooooooooo');
                        list2.push(`( ${question[item]}${question[item+1]} )`)
                        list5.push(`( ${question[item]} + ${question[item+1]} )`)
    
                        item = item+1
                        console.log(item);
                    }
                    else{
                        list2.push(`( ${question[item]} )`)
                        list5.push(`( ${question[item]} )`)
                    }
    
    
    
                    
                
                }
                
                
            }
            for (let x = 0; x < list.length; x++) {
                if ((list[x]===list[x+1]) && ((list[x+1] === list[x+2]))) {
                    list3.push(list[x] + list[x+1] + list[x+2])
                    list4.push(`(${list[x]} + ${list[x+1]} + ${list[x+2]})`)
                    x = x+2
                }
                else if (list[x]===list[x+1]) {
                    list3.push(list[x] + list[x+1])
                    list4.push(`(${list[x]} + ${list[x+1]})`)
                    x = x+1
                }
                else if ((list[x]) < (list[x+1])) {
                    list3.push((list[x+1]) - (list[x]))
                    list4.push(`(${list[x+1]} - ${list[x]})`)
                    x = x+1   
                }
                else{
                    list3.push(list[x])
                    list4.push(`(${list[x].toString()})`)
                }
                
                
            }

            
                
            console.log(list);
            let mySet = new Set(list)
            let neww = Array.from(mySet)
            let mySet2= new Set(question)
            let neww2= Array.from(mySet2)
            let variables=[]
            neww2.forEach((new_, index)=>{
                variables.push(`${new_}=${neww[index]}`)
            })
            console.log(variables);
            let variables_undashed = variables.join(' ').split('-').join('').split('')

             let variables_dashed =[] 

             for (let y = 0; y < variables.join().split('').length; y++) {
                if (variables.join().split('')[y]==='-'){
                    variables_dashed.push(`-${variables.join().split('')[y+1]}`)
                    y=y+1
                }
                else{
                    variables_dashed.push(`${variables.join().split('')[y]}`)
                }     
             }


            let base = list2.join('+').split('')
            let base2 = []
            for (let x = 0; x < base.length; x++) {
                if (base[x]==='-'){
                    base2.push(`-${base[x+1]}`)
                    x=x+1
                }
                else{
                    base2.push(base[x])
                }   
            }
            let base3 = list2.join('+').split('-').join('').split('')


            let anss_undashed = question.join().split('-').join('').split(',')
            
            let list4_ = list4.join(' + ')

            let list5_dashed = []
            let list5_undashed = []
            let new_list5_undashed = []
            let list5_ = list5.join().split('')

            for (let x = 0; x < list5_.length; x++) {
                if (list5_[x]==='-' && !(list5_[x+1]===' ') ){


                    list5_dashed.push(`-${list5_[x+1]}`)
                    list5_undashed.push(`${list5_[x+1]}`)
                    x=x+1
                }
                else{
                    list5_dashed.push(list5_[x])
                    list5_undashed.push(list5_[x])
                }   
            }

            for (let y = 0; y < list5_undashed.length; y++) {
                if (list5_undashed[y] === ',') {
                    new_list5_undashed.push('+')
                    
                }
                else{
                    new_list5_undashed.push(list5_undashed[y])
                }
                
                
            }


    
            
            
            return [adder+subtracter,question.join(''), list2, list, list3,list4,list4_,variables,variables_dashed,variables_undashed,base,base2,base3,anss_undashed,question,list5,list5_,list5_dashed, new_list5_undashed]
    
    
            
            
        }
        else if ((+question.join(''))) {
            let extra = 0
            let numList = []
            let numList2 = []
            let numList3 = []
            let main_list=[]
            let final_list4=[]
            let final_list = []
            let extra_list =[]
            let final_list2 = []
            let final_list3 = []
            let another_list = []
            let another_list2 = []
            let another_list3 = []
            let letter_list = []
            let letter_list2 = []
            let num_string = question.join('');

            let bracket_num = "( " + num_string + " )"
            let num_number = +question.join('')
            let num_array = question.join('').split('')

            console.log(num_array);

            num_array.forEach((str,index)=>{

                if ((!(+str===0) && (+str===4))) {

                    
                    for (let n = 0; n < sets.length; n++) {
                        // console.log( sets[n] + " < " + (+str)*(10**(num_string.length-index-1)));
                        if (sets[n] < (+str)*(10**(num_string.length-index-1)) && (sets[n+1] > (+str)*(10**(num_string.length-index-1))) ) {
                            numList2.push(sets[n]);
                            numList2.push(sets[n+1]);
                            
                            
                        }
                        
                    }
                    
                }
                else if ( (!(+str===0) && (+str===9))) {

                    
                    for (let n = 0; n < sets.length; n++) {
                        console.log( sets[n] + " < " + (+str)*(10**(num_string.length-index-1)));
                        if (sets[n] < (+str)*(10**(num_string.length-index-1)) && (sets[n+1] > (+str)*(10**(num_string.length-index-1))) ) {
                            numList2.push(sets[n-1]);
                            numList2.push(sets[n+1]);
                            
                            
                        }
                        
                    }
                    
                }
                else if (!(+str===0)) {
                    numList2.push((+str)*(10**(num_string.length-index-1)))
                } 

                if (!(+str===0)) {
                    numList.push((+str)*(10**(num_string.length-index-1)))
                } 
    
            })

            console.log(numList);

            for (let x = 0; x < numList.length; x++) {


                extra = numList[x]
                sets.forEach((num, index) => {
                    
                    while((num > extra) && (!(extra<=0)) ) {

                        
                        
                        if ((!(extra===(4*(10**((extra.toString().length)-1)))) && (!(extra===(9*(10**((extra.toString().length)-1))))) && (!(extra===(6*(10**((extra.toString().length)-1))))) && (!(extra===(7*(10**((extra.toString().length)-1))))) && (!(extra===(8*(10**((extra.toString().length)-1))))))) {

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

+6                        }

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


            for (let y = 0; y < numList2.length; y++) {
                console.log( numList2)
                console.log( numList2[y])

                console.log( numList2[y] + " < " + numList2[y+1] + " = " + (numList2[y] < numList2[y+1]));

                if (numList2[y] < numList2[y+1]) {


                    final_list4.push(`( ${numList2[y+1]} - ${numList2[y]} )`);

                    numList3.push(numList2[y+1])
                    numList3.push(numList2[y])

                    let a;
                    let b;

                    for (let z = 0; z < sets.length; z++) {
                        if (numList2[y] === sets[z]) {
                            a = letters[z];  
                        } 
                    }
                    for (let z = 0; z < sets.length; z++) {
                        if (numList2[y+1] === sets[z]) {
                            b = letters[z] ;  
                        } 
                    }

                    letter_list.push(`( ${a} - ${b} )`);

                    if (a[0] === '-') {
                        letter_list2.push(`( ${a[1]} - ${b} )`);
                        
                    }
                    else if (b[0] === '-') {
                        letter_list2.push(`( ${a} - ${b[1]} )`);
                    }
                    else if (a[0] === '-' && b[0] === '-') {
                        letter_list2.push(`( ${a[1]} - ${b[1]} )`);
                    }
                    else{
                        letter_list2.push(`( ${a} - ${b} )`);
                    }


                    y=y+1
                            
                }

                else if (numList2[y] > numList2[y+1]) {

                    
                    for (let z = (sets.length-1); z > -1; z--) {
                        

                        if((numList2[y] % sets[z]) === 0){
                    
                            let value_  = numList2[y] / sets[z];

                            numList3.push(sets[z])
                    



                            


                            if (value_ === 3) {
                                final_list4.push(`( ${sets[z]} + ${sets[z]} + ${sets[z]} )`);
                                letter_list.push(`( ${letters[z]} + ${letters[z]} + ${letters[z]} )`);
                                if (letters[z][0]=== '-') {
                                    letter_list2.push(`( ${letters[z][1]} + ${letters[z][1]} + ${letters[z][1]} )`);
                                }
                                else{
                                    letter_list2.push(`( ${letters[z]} + ${letters[z]} + ${letters[z]} )`);
                                }
                                
                            }
                            if (value_ === 2) {
                                final_list4.push(`( ${sets[z]} + ${sets[z]} )`);
                                letter_list.push(`( ${letters[z]} + ${letters[z]} )`);
                                if (letters[z][0]=== '-') {
                                    letter_list2.push(`( ${letters[z][1]} + ${letters[z][1]} )`);
                                }
                                else{
                                    letter_list2.push(`( ${letters[z]} + ${letters[z]} + ${letters[z]} )`);
                                }
                                
                            }
                            if (value_ === 1) {
                                final_list4.push(`( ${sets[z]} )`);
                                letter_list.push(`( ${letters[z]} )`);

                                if (letters[z][0]=== '-') {
                                    letter_list2.push(`( ${letters[z][1]} )`);
                                }
                                else{
                                    letter_list2.push(`( ${letters[z]} )`);
                                }
                                
                            }

                            break
                        } 
                        
                        
                    }
                        
                }

            }

            for (let y = 0; y < numList3.length; y++) {

                for (let z = 0; z < sets.length; z++) {
                    if (numList3[y] === sets[z]) {
                        another_list.push(letters[z]) 
                    }
                    
                }
                
                
      
            }

            for (let y = 0; y < numList3.length; y++) {
                another_list2.push(`${numList3[y]}=${another_list[y]}`)
                another_list3.push(`${numList3[y]}=${another_list.join("").split("-").join('').split('')[y]}`)
                
                
            }
            let modified = [];
            
            for (let y = 0; y < another_list2.join(' ').split('').length; y++) {
                if (another_list2.join(' ').split('')[y] ==='-') {
                    modified.push(another_list2.join(' ').split('')[y]+another_list2.join(' ').split('')[y+1]) 
                    y++ 
                }
                else{
                    modified.push(another_list2.join(' ').split('')[y])  
                }
                
            }
            let modified0=[];
            

            for (let y = 0; y <  letter_list.join('+').split('').length; y++) {

                
                if (letter_list.join('+').split('')[y] ==='-' && !(letter_list.join('+').split('')[y+1] ===' ')) {
                    modified0.push(letter_list.join('+').split('')[y]+letter_list.join('+').split('')[y+1]) 
                    y++
                }
                else{
                    modified0.push(letter_list.join('+').split('')[y])  
                }
                
            }

            let modified0_1=[];
            

            for (let y = 0; y <  modified0.length; y++) {

                
                if (modified0[y][0] ==='-' && !(modified0[y][1]===undefined)) {
                    modified0_1.push(modified0[y][1]) 
                }
                else{
                    modified0_1.push(modified0[y][0])
                }
                
            }
            console.log(modified0);
            let modified1 = (main_list.join('').split(''));
            let modified2 = (main_list.join('').split('-').join('').split(''));
            let modified3 = '( '+ numList.join(' + ') + ' )' ;
            let modified4 = [];

            for (let y = 0; y <  modified1.length; y++) {
                if (modified1[y] ==='-') {
                    modified4.push(modified1[y]+modified1[y+1]) 
                    y = y+1 
                }
                else{
                    modified4.push(modified1[y])  
                }
                
            }
            

           

            return [final_list,num_number,numList,final_list2,final_list3,extra_list, main_list, bracket_num, numList2, final_list4.join('+'), numList3, another_list, modified, another_list3.join(' ').split(''), modified0, modified0_1, modified4, modified2, modified3]



            
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
    console.log(undashed);
    
    let div_span = document.createElement('span')
    
    dashed.forEach((dash, index)=>{

        let piece3 = document.createElement('span')
        piece3.innerHTML = piece3.innerHTML + undashed[index]


        if (undashed.length >= 10) {
            piece3.classList.add('smaller_text')
    
        }
        else if (undashed.length >= 8) {
            piece3.classList.add('small_text')
    
        }


        if (index===0) {
            piece3.classList.add('first')  
         }

         else if (index===dashed.length-1) {
            piece3.classList.add('last')  
         }

         else{piece3.classList.add('normally') }

            
        
        if (dash[0]==='-') {
            piece3.classList.add('bordermaker2')  
         }
        div_span.appendChild(piece3)

        console.log("im here bro");
        

    })


   
    made.appendChild(div_span)
}

function writeText5(feed, make) {
    heading_t1.innerHTML=''

    

    feed[14].forEach((dash,index)=>{
        let piece4 = document.createElement('span')
        piece4.innerHTML = piece4.innerHTML + feed[13][index]
        
        if (feed[13].length > 10) {
                piece4.classList.add('smaller_text') 
        }
        else if (feed[13] > 6) {
            piece4.classList.add('small_text') 
            
        }

        console.log(feed[14][index]);

        if (feed[14][index][0]==='-') {

            
            piece4.classList.add('bordermaker2')
        }

        
        make.appendChild(piece4)
    }

    )
    }

function writeText4(feed) {
    if (!(feed===undefined)) {


        if (feed[13].length >10) {

            contents_t1.forEach((content)=>{
                content.classList.add('smaller_text')
            })   
        }
        else if (feed[13] > 6) {
            contents_t1.forEach((content)=>{
                content.classList.add('small_text')
            })   
            
        }

        heading_t1.innerHTML=''
        feed[14].forEach((dash,index)=>{
        let piece4 = document.createElement('span')
        piece4.innerHTML = piece4.innerHTML + feed[13][index]

        console.log(feed[14][index]);

        if (feed[14][index][0]==='-') {

            
            piece4.classList.add('bordermaker2')
        }
        heading_t1.appendChild(piece4)
    }

    )
    contents_t1[0].innerHTML=''
    feed[11].forEach((dash,index)=>{
        let piece4 = document.createElement('span')
        piece4.innerHTML = piece4.innerHTML + feed[12][index]

        if (feed[11][index][0]==='-') {
            piece4.classList.add('bordermaker2')
        }
        contents_t1[0].appendChild(piece4)
    })
    contents_t1[1].innerHTML=''
        console.log(feed[17])
        console.log(feed[18])
        feed[17].forEach((dash,index)=>{
        let piece4 = document.createElement('span')
        piece4.innerHTML = piece4.innerHTML + feed[18][index]

        if (feed[17][index][0]==='-' && feed[17][index][1]) {
            piece4.classList.add('bordermaker2')
        }
        
        
        contents_t1[1].appendChild(piece4)
    })
    contents_t1[2].innerHTML=''
    feed[8].forEach((dash,index)=>{
        let piece4 = document.createElement('span')
        piece4.innerHTML = piece4.innerHTML + feed[9][index]

        if (feed[8][index][0]==='-' && (feed[8][index][1])) {
            piece4.classList.add('bordermaker2')
        }
        contents_t1[2].appendChild(piece4)
    })

    contents_t1[3].innerHTML = feed[6]

    the_ans_t1.innerHTML = feed[0]
        
    }
 }

function writeText6(feed) {
    
    if (!(feed === undefined)) {


        if (feed[17].length >10) {


            contents_t1.forEach((content)=>{
                content.classList.add('smaller_text')
            })   
        }
        else if (feed[17].length > 6) {
            contents_t1.forEach((content)=>{
                content.classList.add('small_text')
            })   
            
        }

        
        heading_t1.innerHTML = feed[1];
        contents_t1[0].innerHTML = feed[18];
        contents_t1[1].innerHTML = feed[9];


        contents_t1[2].innerHTML =''
            for (let letter = 0; letter < feed[12].length; letter++) {
                let piece6 = document.createElement('span')
                piece6.innerHTML = piece6.innerHTML + feed[13][letter]
                console.log(feed[12][letter]);
                if (feed[12][letter][0]==='-') {
                    piece6.classList.add('bordermaker2')
                    
                }   
                contents_t1[2].appendChild(piece6)
            }

        contents_t1[3].innerHTML = ''
            console.log(feed[14]);
            for (let letter = 0; letter < feed[14].length; letter++) {
                let piece6 = document.createElement('span')
                piece6.innerHTML = piece6.innerHTML + feed[15][letter]

                if (feed[14][letter][0]==='-' && !(feed[14][letter][1]===undefined)) {
                    console.log(!(feed[14][letter][1]===' '));
                    console.log((feed[14][letter][1]));
                    piece6.classList.add('bordermaker2')
                    
                }   
                contents_t1[3].appendChild(piece6)
            }
        

        the_ans_t1.innerHTML = ''
            for (let letter = 0; letter < feed[16].length; letter++) {
                let piece6 = document.createElement('span')
                piece6.innerHTML = piece6.innerHTML + feed[17][letter]

                if (feed[16][letter][0]==='-') {
                    piece6.classList.add('bordermaker2')
                    
                }   
                the_ans_t1.appendChild(piece6)
            }

    }

    
}
 
function writeText(with_dash_list, without_dash_list) {
    ans.classList.remove('hidden')

    if ((counter2 < with_dash_list.length )) {
        let piece2 = document.createElement('span')
        piece2.innerHTML = without_dash_list[counter2]
        console.log(counter2);
        console.log(with_dash_list);

        


        if (  with_dash_list[counter2][0]==='-') {
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
    let btn1_element
    let btn2_element
    let btn3_element
    let btn4_element
    let button1_element
    let button2_element
    let button3_element
    let button4_element
    



    made = document.createElement('li')
    made.classList.add('item')

    made2 = document.createElement('li')
    made2.classList.add('item')



    

    if (info && problem.classList.contains('hidden')) {
        let listed3 = list__2.querySelectorAll('.item')

        added = listed3.length + 1

        subtracted = 0

        console.log(`the total list is ${added-subtracted}`);

        if ((added-subtracted)>3) {
            list_counted(added,subtracted) 
        }
        else{
            monitor.classList.add('hidden')

        }





        if ((info[0]===0)) {
            let stop = false
            made.innerHTML=`
            <div class="top-button">
                <button class="closer"><i class="fas fa-times"></i></button>
            </div>
            <p class="question">${info[0]}</p>
            <p class="answer">ans:</p>
            `
            made2.innerHTML=`
            <div class="top-button">
                <button class="closer"><i class="fas fa-times"></i></button>
            </div>
            <p class="question">${info[0]}</p>
            <p class="answer">ans:</p>
            `
            
            if (list1.children.length===0) {
                marker_1 = 1;
                marker_2 = 1;
                marker_3 = 1;
                marker_1_2nd = 1;
                marker_2_2nd = 1;
                marker_3_2nd = 1;
                marker_1_3rd = 1;
                marker_2_3rd = 1;
                marker_3_3rd = 1;
                let time_element = document.createElement('p')
                let span_element = document.createElement('span')
                let time_element2 = document.createElement('p')
                let span_element2 = document.createElement('span')
                time_element.classList.add('time')
                time_element2.classList.add('time')
                time_regulator1(time_element,stop)
                time_regulator1(time_element2,stop)
                span_element.innerHTML = `${info[1]}`
                span_element2.innerHTML = `${info[1]}`

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
                time_regulator2(time_element,stop)
                time_regulator2(time_element2,stop)
                span_element.innerHTML = `${info[1]}`
                span_element2.innerHTML = `${info[1]}`

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
                time_regulator3(time_element,stop)
                time_regulator2(time_element2,stop)
                span_element.innerHTML = `${info[1]}`
                span_element2.innerHTML = `${info[1]}`
                
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
                time_regulator3(time_element,stop)
                time_regulator2(time_element2,stop)
                span_element.innerHTML = `${info[1]}`
                span_element2.innerHTML = `${info[1]}`
                
                made.appendChild(time_element)
                made.appendChild(span_element)
                made.classList.add(`item${list1.children.length+1}`)
                

                made2.appendChild(time_element2)
                made2.appendChild(span_element2)
                made2.classList.add(`item${list1.children.length+1}`)

                
            }

            
  
            if (((list__2.children.length)>0)){
                let listed1=list__2.querySelectorAll('.item')

                if (list__2.children.length>1) {

                    listed1.forEach((listed, index)=>{
                                if (index>1){
                                    listed.classList.add('hidden')
                                }
                            })
                        }

                  list__2.children[0].classList.add('left_marginer')
                setTimeout(() => {
                    list__2.prepend(made2)
                    list__2.children[0].classList.remove('left_marginer')
                    list__2.children[1].classList.remove('left_marginer')


                    if (list__2.querySelector('.item2 .top-button')){
                        btn2 = list__2.querySelector('.item2 .top-button')
                        btn2_element = list__2.querySelector('.item2')
                        let lii = list__2.querySelectorAll('.item')
                        let span_box = []
                        let q_span = list__2.querySelectorAll('.item2 .question span')
                        q_span.forEach((span)=>{
                            if (span.classList.contains('bordermaker2')) {
                                span_box.push(`-${span.innerHTML}`)    
                            }
                            else{
                                span_box.push(span.innerHTML)
                            }
                        })
                        if (marker_1_2nd===1) {
                            marker_2_2nd = 0;
                            marker_3_2nd = 0;
                            btn2_element.addEventListener('click', (e)=>{
                                lists_2()

                                
                                e.stopPropagation() 
                                section_transitioning1()
    
                                setTimeout(() => {
                                    phase0_2.classList.add('hidden')
                                    phase2.classList.remove('hidden')  
                                }, 5500);
                                console.log('1B');
                                
                            })
                            
                        }
                        

                        btn2.addEventListener('click',(e)=>{

                            
                            e.stopPropagation()               
                            pointer2.remove()
                            pointer.remove()
                            notification.remove() 
                            subtracted--
                            stop = true
                            console.log('cancel _count is 2');


                            if ((list__2.children.length)===1 && list__2.firstElementChild.classList.contains('item2')) {
                                btn2_element.remove()
                                row2.classList.remove('shorter')
                                id_row3.style.animation =`reverse-horizon 0.5s linear`
                                setTimeout(() => {
                                    section2.classList.add('hidden')
                                    row2.classList.add('enlarger')  
                                }, 300)  
                                
                                                
                            }
                            else{
                                btn2_element.remove()
                                
                                let listed2 = list__2.querySelectorAll('.item')
                            for (let i = 0; i < listed2.length; i++) {

                                console.log(listed2[i]);
                                if (listed2[i].classList.contains('hidden')){
                                    console.log(listed2[i]);
                                    listed2[i].classList.remove('hidden')
                                    listed2[i].classList.add('margin_reducer')

                                    break 
                                }  
                                  
                            }

                            
                                
                            }


                            

            
                            if ((list1.children.length)===1 && list1.firstElementChild.classList.contains('item2')) {
                                reducer.classList.add('reducer') 
                                row1.childNodes[1].classList.remove('active')
                                reducer.classList.remove('grower')
                                setTimeout(() => {
                                row1.classList.add('hidden')
                                row1.childNodes[1].classList.add('remove')  
                                }, 500);
                                setTimeout(() => {
                                    button2_element.remove()
                                }, 1000);
                                    
                            }
                            else{
                                button2_element.remove()
                                
                            }

                            lists_2()                
                        })
                        lists_2()
                    }
                    if (list__2.querySelector('.item3 .top-button')){
                        btn3 = list__2.querySelector('.item3 .top-button')
                        btn3_element = list__2.querySelector('.item3')
                        let lii = list__2.querySelectorAll('.item')
                        let span_box = []
                       let q_span = list__2.querySelectorAll('.item3 .question span')
                       q_span.forEach((span)=>{
                           if (span.classList.contains('bordermaker2')) {
                               span_box.push(`-${span.innerHTML}`)    
                           }
                           else{
                               span_box.push(span.innerHTML)
                           }
                       })
                       
                       if (marker_1_3rd === 1) {
                        marker_2_3rd = 0;
                        marker_3_3rd = 0
                        btn3_element.addEventListener('click', (e)=>{
                            lists_2()
                            e.stopPropagation() 
                            section_transitioning1()

                            setTimeout(() => {
                                phase0_2.classList.add('hidden')
                                phase2.classList.remove('hidden')  
                            }, 5500);
                            
                        })
                        
                       }


                

                        btn3.addEventListener('click',(e)=>{
                            e.stopPropagation()
                            
                            pointer2.remove()
                            pointer.remove()
                            notification.remove() 
                            subtracted--
                            stop = true

                            if ((list__2.children.length)===1 && list__2.firstElementChild.classList.contains('item3')) {
                                btn3_element.remove()
                                console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                                row2.classList.remove('shorter')
                                id_row3.style.animation =`reverse-horizon 0.5s linear`
                                setTimeout(() => {
                                    section2.classList.add('hidden')
                                    row2.classList.add('enlarger')
                                    
                                }, 300)                 
                                                
                            }
                            else{
                                btn3_element.remove()

                                let listed2 = list__2.querySelectorAll('.item')
                            for (let i = 0; i < listed2.length; i++) {

                                console.log(listed2[i]);
                                if (listed2[i].classList.contains('hidden')){
                                    console.log(listed2[i]);
                                    listed2[i].classList.remove('hidden')
                                    listed2[i].classList.add('margin_reducer')

                                    break 
                                }  
                                  
                            }
                            }
            
                            if ((list1.children.length)===1 && list1.firstElementChild.classList.contains('item3')) {
                                reducer.classList.add('reducer') 
                                row1.childNodes[1].classList.remove('active')
                                reducer.classList.remove('grower')
                                setTimeout(() => {
                                row1.classList.add('hidden')
                                row1.childNodes[1].classList.add('remove')  
                                }, 500);
                                setTimeout(() => {
                                    button3_element.remove()
                                }, 1000);
                                    
                            }
                            else{
                                button3_element.remove()
                                
                            }
                            lists_2()                    
                        })
                        lists_2()

                    }

                    if ((list__2.querySelector(`.item${list__2.children.length} .top-button`) && list__2.children.length>3 )){
                        btn4 = list__2.querySelector(`.item${list__2.children.length} .top-button`)
                        btn4_element = list__2.querySelector(`.item${list__2.children.length}`)
                        let lii = list__2.querySelectorAll('.item')                       
                         let span_box = []
                         let q_span = list__2.querySelectorAll(`.item${list__2.children.length} .question span`)
                         q_span.forEach((span)=>{
                             if (span.classList.contains('bordermaker2')) {
                                 span_box.push(`-${span.innerHTML}`)    
                             }
                             else{
                                 span_box.push(span.innerHTML)
                             }
                         })


                         btn4_element.addEventListener('click', (e)=>{
                            lists_2()
                            e.stopPropagation() 
                            section_transitioning1()

                            setTimeout(() => {
                                phase0_2.classList.add('hidden')
                                phase2.classList.remove('hidden')  
                            }, 5500);
                            
                        })

                        btn4.addEventListener('click',(e)=>{
                            
                            e.stopPropagation()  
                            pointer2.remove()
                            pointer.remove()
                            notification.remove() 
                            subtracted--
                            stop = true
                            
                            
                            if ((((list__2.children.length)===1 && !(list__2.firstElementChild.classList.contains(`.item3`)) && !(list__2.firstElementChild.classList.contains(`.item2`))))) {
                                btn4_element.remove()
                                console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                                row2.classList.remove('shorter')
                                id_row3.style.animation =`reverse-horizon 0.5s linear`
                                

                                setTimeout(() => {
                                    section2.classList.add('hidden')
                                    row2.classList.add('enlarger')
                                    
                                }, 300)                  
                            }
                            else{
                                btn4_element.remove()

                                let listed2 = list__2.querySelectorAll('.item')
                            for (let i = 0; i < listed2.length; i++) {

                                console.log(listed2[i]);
                                if (listed2[i].classList.contains('hidden')){
                                    console.log(listed2[i]);
                                    listed2[i].classList.remove('hidden')
                                    listed2[i].classList.add('margin_reducer')

                                    break 
                                }  
                                  
                            }
                            }

                            if (((list1.children.length)===1 && !(list1.firstElementChild.classList.contains(`.item3`)) && !(list1.firstElementChild.classList.contains(`.item2`)))) {
                                reducer.classList.add('reducer') 
                                row1.childNodes[1].classList.remove('active')
                                reducer.classList.remove('grower')
                                setTimeout(() => {
                                row1.classList.add('hidden')
                                row1.childNodes[1].classList.add('remove')  
                                }, 500);
                                setTimeout(() => {
                                    button4_element.remove()
                                }, 1000);
                                    
                            }
                            else{
                                button4_element.remove()
                                
                                
                            }
                            lists_2()                    
                        })

                        lists_2()

                    }
                    
                }, 300);

            }
            else{
                list__2.prepend(made2)

            }
            if (list__2.querySelector(`.item1 .top-button`)){
                btn1 = list__2.querySelector(`.item1 .top-button`)
                btn1_element = list__2.querySelector(`.item1`)
                let lii = list__2.querySelectorAll('.item')
                let span_box = []
                let q_span = list__2.querySelectorAll(`.item1 .question span`)
                q_span.forEach((span)=>{
                    if (span.classList.contains('bordermaker2')) {
                        span_box.push(`-${span.innerHTML}`)    
                    }
                    else{
                        span_box.push(span.innerHTML)
                    }
                })

                lii.forEach(element => {
                    console.log(element.children);
                });


                if (marker_1 === 1) {
                    marker_2 = 0;
                    marker_3 = 0;

                    console.log("here is marker_1 " +  marker_1 + " and marker_2 " + marker_2);

                    
                    btn1_element.addEventListener('click', (e)=>{
                            lists_2()
                            e.stopPropagation() 
                            section_transitioning1()
        
                            setTimeout(() => {
                                phase0_2.classList.add('hidden')
                                phase2.classList.remove('hidden')  
                            }, 5500);        
                           
                        }
                        
                       
                    )
                    
                }
                

                

                btn1.addEventListener('click',(e)=>{


                    e.stopPropagation()
                    pointer2.remove()
                    pointer.remove()    
                    notification.remove() 
                    subtracted--
                    stop = true
                    btn1_element.remove()
                    button1_element.remove()


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
                    }
                    


                    
                    if (!(list__2.children.length)) {
                        console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                        row2.classList.remove('shorter')
                        id_row3.style.animation =`reverse-horizon 0.5s linear`
                        setTimeout(() => {
                            section2.classList.add('hidden')
                            row2.classList.add('enlarger')
                            
                        }, 300)

                        
                       
                                        
                                        
                    }

                    
                    lists_2()                     
                })
                lists_2()
            }
            


            if (((list1.children.length)>0)){
                
                list1.children[0].classList.add('marginer')

                setTimeout(() => {
                    list1.prepend(made) 
                    list1.children[0].classList.remove('marginer')
                    list1.children[1].classList.remove('marginer')


                    if (list1.querySelector('.item2 .top-button')){
                        button2 = list1.querySelector('.item2 .top-button')
                        button2_element = list1.querySelector('.item2')
                       
                        button2.addEventListener('click',(e)=>{
                            e.stopPropagation() 
                            stop = true
                            button2_element.remove()
                            btn2_element.remove()
        
        
                            let listed2 = list__2.querySelectorAll('.item')
                                    for (let i = 0; i < listed2.length; i++) {
        
                                        console.log(listed2[i]);
                                        if (listed2[i].classList.contains('hidden')){
                                            console.log(listed2[i]);
                                            listed2[i].classList.remove('hidden')
                                            listed2[i].classList.add('margin_reducer')
        
                                            break 
                                        }  
                                          
                                    }
                            
        
                            console.log(list1.children.length);
        
                            if (!(list__2.children.length)) {
                                console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                                row2.classList.remove('shorter')
                                id_row3.style.animation =`reverse-horizon 0.5s linear`
                                
        
                                setTimeout(() => {
                                    section2.classList.add('hidden')
                                    row2.classList.add('enlarger')
                                    
                                }, 300)
        
                            }
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
        
                                
                                
        
                            }
        
                        })


                        if (marker_1_2nd ===1) {
                            marker_2_2nd = 0;
                            marker_1_3rd= 0;
                            button2_element.addEventListener('click', (e)=>{
                                e.stopPropagation() 
                                section_transitioning1()
            
                                setTimeout(() => {
                                    phase0_2.classList.add('hidden')
                                    phase2.classList.remove('hidden')  
                                }, 5500);        
                               
                            })
                        }
                        

                        
                    }

                    if (list1.querySelector('.item3 .top-button')){
                        button3 = list1.querySelector('.item3 .top-button')
                        button3_element = list1.querySelector('.item3')
                       
                        button3.addEventListener('click',(e)=>{
                            e.stopPropagation() 
                            console.log('cancel _count is');
                            stop = true
                            btn3_element.remove()
                            let listed2 = list__2.querySelectorAll('.item')
                            for (let i = 0; i < listed2.length; i++) {

                                console.log(listed2[i]);
                                if (listed2[i].classList.contains('hidden')){
                                    console.log(listed2[i]);
                                    listed2[i].classList.remove('hidden')
                                    listed2[i].classList.add('margin_reducer')

                                    break 
                                }  
                                  
                            }


                            if (((list__2.children.length)===1) && list__2.firstElementChild.classList.contains('item3')) {
                                console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                                row2.classList.remove('shorter')
                                id_row3.style.animation =`reverse-horizon 0.5s linear`
                            }

                            if ((list1.children.length)===1 && list1.firstElementChild.classList.contains('item3')) {
                                reducer.classList.add('reducer') 
                                row1.childNodes[1].classList.remove('active')
                                reducer.classList.remove('grower')
                                setTimeout(() => {
                                row1.classList.add('hidden')
                                row1.childNodes[1].classList.add('remove')  
                                }, 500);
                                setTimeout(() => {
                                    button3_element.remove()
                                }, 1000);
                                    
                            }
                            else{
                                button3_element.remove()
                                
                            }
                                


                            

                            
    

                           
                        })

                        if (marker_1_3rd === 1) {
                            marker_2_3rd = 0;
                            marker_3_3rd = 0;
                            button3_element.addEventListener('click', (e)=>{
                                e.stopPropagation() 
                                section_transitioning1()
            
                                setTimeout(() => {
                                    phase0_2.classList.add('hidden')
                                    phase2.classList.remove('hidden')  
                                }, 5500);        
                               
                            })
                        }
                        
                    }

                    if (list1.querySelector(`.item${list1.children.length} .top-button`) && list1.children.length>3 ){
                        button4 = list1.querySelector(`.item${list1.children.length} .top-button`)
                        button4_element = list1.querySelector(`.item${list1.children.length}`)
                        
                       
                        button4.addEventListener('click',(e)=>{            
                            e.stopPropagation() 
                            console.log('bro, over here bt' );
                            stop = true
                            
                            btn4_element.remove()
                            let listed2 = list__2.querySelectorAll('.item')
                            for (let i = 0; i < listed2.length; i++) {

                                console.log(listed2[i]);
                                if (listed2[i].classList.contains('hidden')){
                                    console.log(listed2[i]);
                                    listed2[i].classList.remove('hidden')
                                    listed2[i].classList.add('margin_reducer')

                                    break 
                                }  
                                  
                            }

                            if (((list1.children.length)===1 && !(list1.firstElementChild.classList.contains(`.item3`)) && !(list1.firstElementChild.classList.contains(`.item2`)))) {
                                console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                                row2.classList.remove('shorter')
                                id_row3.style.animation =`reverse-horizon 0.5s linear`
                                

                                setTimeout(() => {
                                    section2.classList.add('hidden')
                                    row2.classList.add('enlarger')
                                    
                                }, 300)
                                                
                                                
                            }

                            if ((list1.children.length)===1 && !(list1.firstElementChild.classList.contains(`.item3`)) && !(list1.firstElementChild.classList.contains(`.item2`))) {
                                console.log('it worked ' );
                                
                                reducer.classList.add('reducer') 
                                row1.childNodes[1].classList.remove('active')
                                reducer.classList.remove('grower')
                                setTimeout(() => {
                                row1.classList.add('hidden')
                                row1.childNodes[1].classList.add('remove')  
                                }, 500);
                                setTimeout(() => {
                                    button4_element.remove()
                                }, 1000);
                                    
                            }
                            else{
                                button4_element.remove()
                                
                            }
                        

                            if (!(list1.children.length)) {
                                console.log('hiiiiiiiiiiiiiiiiiiiiiiii');

                                list1.classList.remove('active')
                                list1.classList.add('remove')

                                setTimeout(() => {
                                    reducer.classList.remove('grower')
                                    reducer.classList.add('reducer')
                                    
                                }, 500);
                                setTimeout(() => {
                                    row1.classList.add('hidden') 
                                    reducer.classList.remove('reducer')
                                }, 1000 );

                            }

                            
    

                           
                        })

                        button4_element.addEventListener('click', (e)=>{
                            e.stopPropagation() 
                            section_transitioning1()
        
                            setTimeout(() => {
                                phase0_2.classList.add('hidden')
                                phase2.classList.remove('hidden')  
                            }, 5500);        
                           
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
               
                button1.addEventListener('click',(e)=>{
                    e.stopPropagation() 

                    
                    
                    stop = true
                    button1_element.remove()
                    btn1_element.remove()


                    let listed2 = list__2.querySelectorAll('.item')
                            for (let i = 0; i < listed2.length; i++) {

                                console.log(listed2[i]);
                                if (listed2[i].classList.contains('hidden')){
                                    console.log(listed2[i]);
                                    listed2[i].classList.remove('hidden')
                                    listed2[i].classList.add('margin_reducer')

                                    break 
                                }  
                                  
                            }
                    

                    console.log(list1.children.length);

                    if (!(list__2.children.length)) {
                        console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                        row2.classList.remove('shorter')
                        id_row3.style.animation =`reverse-horizon 0.5s linear`
                        

                        setTimeout(() => {
                            section2.classList.add('hidden')
                            row2.classList.add('enlarger')
                            
                        }, 300)

                    }
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

                        
                        

                    }

                })

                if (marker_1 === 1) {
                    marker_2 = 0;
                    marker_3 = 0;
                    button1_element.addEventListener('click', (e)=>{
                        e.stopPropagation() 
                        section_transitioning1()

                        setTimeout(() => {
                            phase0_2.classList.add('hidden')
                            phase2.classList.remove('hidden')  
                        }, 5500);        
                    
                    })
            }
            }    


                

                

                


            
        }      
        
        else if ((+info[0]) && !(info[0]===0)){
            
            let stop = false
            made.innerHTML=`
            <div class="top-button">
                <button class="closer"><i class="fas fa-times"></i></button>
            </div>

            <p class="answer">ans:</p>
            `
            made2.innerHTML=`
            <div class="top-button">
                <button class="closer"><i class="fas fa-times"></i></button>
            </div>
            <p class="answer">ans:</p>
            `
            
            if (list1.children.length===0) {
                marker_1 = 1;
                marker_2 = 1;
                marker_1_2nd =1;
                marker_2_2nd =1;
                marker_1_3rd =1;
                marker_2_3rd =1;
                let question_1 = document.createElement('div')
                question_1.classList.add('question')
                let question_2 = document.createElement('div')
                question_2.classList.add('question')
                writeText5(info,question_1)
                writeText5(info,question_2)
                made.appendChild(question_1)
                made2.appendChild(question_2)

                console.log(made);
                let time_element = document.createElement('p')
                let span_element = document.createElement('span')
                let time_element2 = document.createElement('p')
                let span_element2 = document.createElement('span')
   
                time_element.classList.add('time')
                time_element2.classList.add('time')
                time_regulator1(time_element,stop)
                time_regulator1(time_element2,stop)
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
                let question_1 = document.createElement('div')
                question_1.classList.add('question')
                let question_2 = document.createElement('div')
                question_2.classList.add('question')
                writeText5(info,question_1)
                writeText5(info,question_2)
                made.appendChild(question_1)
                made2.appendChild(question_2)
                
                let time_element = document.createElement('p')
                let span_element = document.createElement('span')
                let time_element2 = document.createElement('p')
                let span_element2 = document.createElement('span')
                time_element.classList.add('time')
                time_element2.classList.add('time')
                time_regulator2(time_element,stop)
                time_regulator2(time_element2,stop)
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
                let question_1 = document.createElement('div')
                question_1.classList.add('question')
                let question_2 = document.createElement('div')
                question_2.classList.add('question')
                writeText5(info,question_1)
                writeText5(info,question_2)
                made.appendChild(question_1)
                made2.appendChild(question_2)
                
                let time_element = document.createElement('p')
                let span_element = document.createElement('span')
                let time_element2 = document.createElement('p')
                let span_element2 = document.createElement('span')
                time_element.classList.add('time')
                time_element2.classList.add('time')
                time_regulator3(time_element,stop)
                time_regulator2(time_element2,stop)
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
                let question_1 = document.createElement('div')
                question_1.classList.add('question')
                let question_2 = document.createElement('div')
                question_2.classList.add('question')
                writeText5(info,question_1)
                writeText5(info,question_2)
                made.appendChild(question_1)
                made2.appendChild(question_2)

                let time_element = document.createElement('p')
                let span_element = document.createElement('span')
                let time_element2 = document.createElement('p')
                let span_element2 = document.createElement('span')
                time_element.classList.add('time')
                time_element2.classList.add('time')
                time_regulator3(time_element,stop)
                time_regulator2(time_element2,stop)
                span_element.innerHTML = `${info[0]}`
                span_element2.innerHTML = `${info[0]}`
                
                made.appendChild(time_element)
                made.appendChild(span_element)
                made.classList.add(`item${list1.children.length+1}`)
                

                made2.appendChild(time_element2)
                made2.appendChild(span_element2)
                made2.classList.add(`item${list1.children.length+1}`)
                

                
            }
      
            
            if (((list__2.children.length)>0)){
                
                let listed1=list__2.querySelectorAll('.item')

                if (list__2.children.length>1) {

                    listed1.forEach((listed, index)=>{
                                if (index>1){
                                    listed.classList.add('hidden')
                                }
                            })
                        }

                  list__2.children[0].classList.add('left_marginer')
                setTimeout(() => {
                    list__2.prepend(made2)
                    list__2.children[0].classList.remove('left_marginer')
                    list__2.children[1].classList.remove('left_marginer')


                    if (list__2.querySelector('.item2 .top-button')){
                        btn2 = list__2.querySelector('.item2 .top-button')
                        btn2_element = list__2.querySelector('.item2')
                        let lii = list__2.querySelectorAll('.item')
                        let span_box = []
                        let q_span = list__2.querySelectorAll('.item2 .question span')
                        q_span.forEach((span)=>{
                            if (span.classList.contains('bordermaker2')) {
                                span_box.push(`-${span.innerHTML}`)    
                            }
                            else{
                                span_box.push(span.innerHTML)
                            }
                        })


                        if (marker_2_2nd === 1) {
                            marker_1_2nd = 0;
                            marker_3_2nd = 0;
                            btn2_element.addEventListener('click', (e)=>{
                                e.stopPropagation() 
                                let Texts
                                let storer=[]
                                console.log(rev_solved_accumulator.length);
                                
                                function finding_numeral(span_box ,storer) {
                                    
                                    for (let i = 0; i < rev_solved_accumulator.length; i++) {
                                        console.log(rev_solved_accumulator[i])
                                        console.log(span_box.join(''));
    
                                        if(rev_solved_accumulator[i][1] === span_box.join('')){
                                            storer.push(rev_solved_accumulator[i])
    
                                            console.log(storer);
                                            break
                                        }   
                                        
                                    }
                                    
                                }
                                
                                finding_numeral(span_box,storer) 
                                console.log(storer)
                                Texts = writeText4(storer[0])   
                                section_transitioning2()
    
                                setTimeout(() => {
                                    phase0_1.classList.add('hidden')
                                    phase1.classList.remove('hidden')  
                                }, 5500);
                                console.log('2 ');
                            })
                        }

                        btn2.addEventListener('click',(e)=>{
                            e.stopPropagation()               
                            pointer2.remove()
                            pointer.remove()
                            notification.remove() 
                            subtracted--
                            stop = true
                            console.log('cancel _count is');


                            if ((list__2.children.length)===1 && list__2.firstElementChild.classList.contains('item2')) {
                                btn2_element.remove()
                                

                                row2.classList.remove('shorter')
                                id_row3.style.animation =`reverse-horizon 0.5s linear`
                                setTimeout(() => {
                                    section2.classList.add('hidden')
                                    row2.classList.add('enlarger')  
                                }, 300)  
                                
                                                
                            }
                            else{
                                btn2_element.remove()
                                
                                let listed2 = list__2.querySelectorAll('.item')
                            for (let i = 0; i < listed2.length; i++) {

                                console.log(listed2[i]);
                                if (listed2[i].classList.contains('hidden')){
                                    console.log(listed2[i]);
                                    listed2[i].classList.remove('hidden')
                                    listed2[i].classList.add('margin_reducer')

                                    break 
                                }  
                                  
                            }
                                
                            }


                            

            
                            if ((list1.children.length)===1 && list1.firstElementChild.classList.contains('item2')) {
                                reducer.classList.add('reducer') 
                                row1.childNodes[1].classList.remove('active')
                                reducer.classList.remove('grower')
                                setTimeout(() => {
                                row1.classList.add('hidden')
                                row1.childNodes[1].classList.add('remove')  
                                }, 500);
                                setTimeout(() => {
                                    button2_element.remove()
                                }, 1000);
                                    
                            }
                            else{
                                button2_element.remove()
                                
                            }

                                            
                        })
                    }
                    if (list__2.querySelector('.item3 .top-button')){
                         btn3 = list__2.querySelector('.item3 .top-button')
                         btn3_element = list__2.querySelector('.item3')
                         let lii = list__2.querySelectorAll('.item')
                         let span_box = []
                        let q_span = list__2.querySelectorAll('.item3 .question span')
                        q_span.forEach((span)=>{
                            if (span.classList.contains('bordermaker2')) {
                                span_box.push(`-${span.innerHTML}`)    
                            }
                            else{
                                span_box.push(span.innerHTML)
                            }
                        })

                        if (marker_2_3rd === 1 ) {
                            marker_1_3rd =0;
                            marker_3_3rd =0;

                            btn3_element.addEventListener('click', (e)=>{
                                e.stopPropagation() 
                                let Texts
                                let storer=[]
                                console.log(rev_solved_accumulator.length);
                                
                                function finding_numeral(span_box ,storer) {
                                    
                                    for (let i = 0; i < rev_solved_accumulator.length; i++) {
                                        console.log(rev_solved_accumulator[i])
                                        console.log(span_box.join(''));
    
                                        if(rev_solved_accumulator[i][1] === span_box.join('')){
                                            storer.push(rev_solved_accumulator[i])
    
                                            console.log(storer);
                                            break
                                        }   
                                        
                                    }
                                    
                                }
                                
                                finding_numeral(span_box,storer) 
                                console.log(storer)
                                Texts = writeText4(storer[0])   
                                section_transitioning2()
    
                                setTimeout(() => {
                                    phase0_1.classList.add('hidden')
                                    phase1.classList.remove('hidden')  
                                }, 5500);
                                
                                
    
    
                                
                            })
                            
                        }
                        

                        btn3.addEventListener('click',(e)=>{
                            e.stopPropagation()
                            
                            pointer2.remove()
                            pointer.remove()
                            notification.remove() 
                            subtracted--
                            stop = true

                            if ((list__2.children.length)===1 && list__2.firstElementChild.classList.contains('item3')) {
                                btn3_element.remove()
                                console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                                row2.classList.remove('shorter')
                                id_row3.style.animation =`reverse-horizon 0.5s linear`
                                setTimeout(() => {
                                    section2.classList.add('hidden')
                                    row2.classList.add('enlarger')
                                    
                                }, 300)                 
                                                
                            }
                            else{
                                btn3_element.remove()

                                let listed2 = list__2.querySelectorAll('.item')
                            for (let i = 0; i < listed2.length; i++) {

                                console.log(listed2[i]);
                                if (listed2[i].classList.contains('hidden')){
                                    console.log(listed2[i]);
                                    listed2[i].classList.remove('hidden')
                                    listed2[i].classList.add('margin_reducer')

                                    break 
                                }  
                                  
                            }
                            }
            
                            if ((list1.children.length)===1 && list1.firstElementChild.classList.contains('item3')) {
                                reducer.classList.add('reducer') 
                                row1.childNodes[1].classList.remove('active')
                                reducer.classList.remove('grower')
                                setTimeout(() => {
                                row1.classList.add('hidden')
                                row1.childNodes[1].classList.add('remove')  
                                }, 500);
                                setTimeout(() => {
                                    button3_element.remove()
                                }, 1000);
                                    
                            }
                            else{
                                button3_element.remove()
                                
                            }
                                                
                        })
                    }

                    if ((list__2.querySelector(`.item${list__2.children.length} .top-button`) && list__2.children.length>3 )){
                        btn4 = list__2.querySelector(`.item${list__2.children.length} .top-button`)
                        btn4_element = list__2.querySelector(`.item${list__2.children.length}`)
                        let lii = list__2.querySelectorAll('.item')                       
                         let span_box = []
                         let q_span = list__2.querySelectorAll(`.item${list__2.children.length} .question span`)
                         q_span.forEach((span)=>{
                             if (span.classList.contains('bordermaker2')) {
                                 span_box.push(`-${span.innerHTML}`)    
                             }
                             else{
                                 span_box.push(span.innerHTML)
                             }
                         })


                         btn4_element.addEventListener('click', (e)=>{
                            let Texts
                            let storer=[]
                            console.log(rev_solved_accumulator.length);
                            
                            function finding_numeral(span_box ,storer) {
                                
                                for (let i = 0; i < rev_solved_accumulator.length; i++) {
                                    console.log(rev_solved_accumulator[i])
                                    console.log(span_box.join(''));

                                    if(rev_solved_accumulator[i][1] === span_box.join('')){
                                        storer.push(rev_solved_accumulator[i])

                                        console.log(storer);
                                        break
                                    }   
                                    
                                }
                                
                            }
                            
                            finding_numeral(span_box,storer) 
                            console.log(storer)
                            Texts = writeText4(storer[0])   
                            section_transitioning2()

                            setTimeout(() => {
                                phase0_1.classList.add('hidden')
                                phase1.classList.remove('hidden')  
                            }, 5500);
                            

                            
                            
                        })

                        btn4.addEventListener('click',(e)=>{
                            
                            e.stopPropagation()  
                            pointer2.remove()
                            pointer.remove()
                            notification.remove() 
                            subtracted--
                            stop = true
                            
                            
                            if ((((list__2.children.length)===1 && !(list__2.firstElementChild.classList.contains(`.item3`)) && !(list__2.firstElementChild.classList.contains(`.item2`))))) {
                                btn4_element.remove()
                                console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                                row2.classList.remove('shorter')
                                id_row3.style.animation =`reverse-horizon 0.5s linear`
                                

                                setTimeout(() => {
                                    section2.classList.add('hidden')
                                    row2.classList.add('enlarger')
                                    
                                }, 300)                  
                            }
                            else{
                                btn4_element.remove()

                                let listed2 = list__2.querySelectorAll('.item')
                            for (let i = 0; i < listed2.length; i++) {

                                console.log(listed2[i]);
                                if (listed2[i].classList.contains('hidden')){
                                    console.log(listed2[i]);
                                    listed2[i].classList.remove('hidden')
                                    listed2[i].classList.add('margin_reducer')

                                    break 
                                }  
                                  
                            }
                            }

                            if (((list1.children.length)===1 && !(list1.firstElementChild.classList.contains(`.item3`)) && !(list1.firstElementChild.classList.contains(`.item2`)))) {
                                reducer.classList.add('reducer') 
                                row1.childNodes[1].classList.remove('active')
                                reducer.classList.remove('grower')
                                setTimeout(() => {
                                row1.classList.add('hidden')
                                row1.childNodes[1].classList.add('remove')  
                                }, 500);
                                setTimeout(() => {
                                    button4_element.remove()
                                }, 1000);
                                    
                            }
                            else{
                                button4_element.remove()
                                
                                
                            }
                                                
                        })

                    }
              
                    
                }, 300);
                
            }
            else{
                
                list__2.prepend(made2)
                
                

            }
            if (list__2.querySelector(`.item1 .top-button`)){
                 btn1 = list__2.querySelector(`.item1 .top-button`)
                 btn1_element = list__2.querySelector(`.item1`)
                 let lii = list__2.querySelectorAll('.item')
                 let span_box = []
                 let q_span = list__2.querySelectorAll(`.item1 .question span`)
                 q_span.forEach((span)=>{
                     if (span.classList.contains('bordermaker2')) {
                         span_box.push(`-${span.innerHTML}`)    
                     }
                     else{
                         span_box.push(span.innerHTML)
                     }
                 })

                 

                

                if (marker_2 === 1) {
                    marker_1 = 0;
                    marker_3 = 0;
                    
                    
                    console.log("here is marker_2 " +  marker_2 + " and marker 1 " + marker_1);
                    btn1_element.addEventListener('click', (e)=>{

                                console.log("i clicked " + clicker);
                            e.stopPropagation() 
                            let Texts
                            let storer=[]
                            console.log(rev_solved_accumulator.length);
                            
                            function finding_numeral(span_box ,storer) {
                                
                                for (let i = 0; i < rev_solved_accumulator.length; i++) {
                                    console.log(rev_solved_accumulator[i])
                                    console.log(span_box.join(''));
        
                                    if(rev_solved_accumulator[i][1] === span_box.join('')){
                                        storer.push(rev_solved_accumulator[i])
        
                                        console.log(storer);
                                        break
                                    }   
                                    
                                }
                                
                            }
                            
                            finding_numeral(span_box,storer) 
                            console.log(storer)
                            Texts = writeText4(storer[0])   
                            section_transitioning2()
        
                            setTimeout(() => {
                                phase0_1.classList.add('hidden')
                                phase1.classList.remove('hidden')  
                            }, 5500);
                            
                            console.log('2B');
                            
                                
                            
                                                
                       
                    })

                
                    
                }
                
                    

                 

                btn1.addEventListener('click',(e)=>{


                    e.stopPropagation()
                    pointer2.remove()
                    pointer.remove()    
                    notification.remove() 
                    subtracted--
                    stop = true
                    btn1_element.remove()
                    button1_element.remove()


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
                    }
                    


                    
                    if (!(list__2.children.length)) {
                        console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                        row2.classList.remove('shorter')
                        id_row3.style.animation =`reverse-horizon 0.5s linear`
                        setTimeout(() => {
                            section2.classList.add('hidden')
                            row2.classList.add('enlarger')
                            
                        }, 300)

                        
                       
                                        
                                        
                    }
                                        
                })

            }
            
            if (((list1.children.length)>0)){
                
                list1.children[0].classList.add('marginer')

                setTimeout(() => {
                    list1.prepend(made) 
                    list1.children[0].classList.remove('marginer')
                    list1.children[1].classList.remove('marginer')


                    if (list1.querySelector('.item2 .top-button')){
                        button2 = list1.querySelector('.item2 .top-button')
                        button2_element = list1.querySelector('.item2')
                        let lii = list1.querySelectorAll('.item')
                        let span_box = []
                        let q_span = list1.querySelectorAll('.item2 .question span')
                        q_span.forEach((span)=>{
                            if (span.classList.contains('bordermaker2')) {
                                span_box.push(`-${span.innerHTML}`)    
                            }
                            else{
                                span_box.push(span.innerHTML)
                            }
                        })
                        if (marker_2_2nd === 1) {
                            marker_1_2nd = 0;
                            marker_3_2nd = 0;
                            button2_element.addEventListener('click', (e)=>{
                                e.stopPropagation() 
                                let Texts
                                let storer=[]
                                console.log(rev_solved_accumulator.length);
                                
                                function finding_numeral(span_box ,storer) {
                                    
                                    for (let i = 0; i < rev_solved_accumulator.length; i++) {
                                        console.log(rev_solved_accumulator[i])
                                        console.log(span_box.join(''));
    
                                        if(rev_solved_accumulator[i][1] === span_box.join('')){
                                            storer.push(rev_solved_accumulator[i])
    
                                            console.log(storer);
                                            break
                                        }   
                                        
                                    }
                                    
                                }
                                
                                finding_numeral(span_box,storer) 
                                console.log(storer)
                                Texts = writeText4(storer[0])   
                                section_transitioning2()
    
                                setTimeout(() => {
                                    phase0_1.classList.add('hidden')
                                    phase1.classList.remove('hidden')  
                                }, 5500);
                                
                                
                            })
                        }
                        
                       
                        button2.addEventListener('click',(e)=>{

                            e.stopPropagation()
                            
                            
                            
                            
                            
                            pointer2.remove()
                            pointer.remove()
                            notification.remove() 
                            subtracted--
                            stop = true
                            btn2_element.remove()

                            let listed2 = list__2.querySelectorAll('.item')
                            for (let i = 0; i < listed2.length; i++) {

                                console.log(listed2[i]);
                                if (listed2[i].classList.contains('hidden')){
                                    console.log(listed2[i]);
                                    listed2[i].classList.remove('hidden')
                                    listed2[i].classList.add('margin_reducer')

                                    break 
                                }  
                                  
                            }

                            if ((list__2.children.length==1) && list__2.firstElementChild.classList.contains('item2')) {
                                console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                                row2.classList.remove('shorter')
                                id_row3.style.animation =`reverse-horizon 0.5s linear`
                            }
                            


                            if ((list1.children.length)===1 && list1.firstElementChild.classList.contains('item2')) {
                                reducer.classList.add('reducer') 
                                row1.childNodes[1].classList.remove('active')
                                reducer.classList.remove('grower')
                                setTimeout(() => {
                                row1.classList.add('hidden')
                                row1.childNodes[1].classList.add('remove')  
                                }, 500);
                                setTimeout(() => {
                                    button2_element.remove()
                                }, 1000);
                                    
                            }
                            else{
                                button2_element.remove()
                                
                            }
    
                        })
                    }

                    if (list1.querySelector('.item3 .top-button')){
                        button3 = list1.querySelector('.item3 .top-button')
                        button3_element = list1.querySelector('.item3')
                        let lii = list1.querySelectorAll('.item')
                        let span_box = []
                        let q_span = list1.querySelectorAll('.item3 .question span')
                        q_span.forEach((span)=>{
                            if (span.classList.contains('bordermaker2')) {
                                span_box.push(`-${span.innerHTML}`)    
                            }
                            else{
                                span_box.push(span.innerHTML)
                            }
                        })

                        if (marker_2_3rd === 1 ) {
                            marker_1_3rd =0;
                            marker_3_3rd =0;
                            button3_element.addEventListener('click', (e)=>{
                                e.stopPropagation() 
                                let Texts
                                let storer=[]
                                console.log(rev_solved_accumulator.length);
                                
                                function finding_numeral(span_box ,storer) {
                                    
                                    for (let i = 0; i < rev_solved_accumulator.length; i++) {
                                        console.log(rev_solved_accumulator[i])
                                        console.log(span_box.join(''));
    
                                        if(rev_solved_accumulator[i][1] === span_box.join('')){
                                            storer.push(rev_solved_accumulator[i])
    
                                            console.log(storer);
                                            break
                                        }   
                                        
                                    }
                                    
                                }
                                
                                finding_numeral(span_box,storer) 
                                console.log(storer)
                                Texts = writeText4(storer[0])   
                                section_transitioning2()
    
                                setTimeout(() => {
                                    phase0_1.classList.add('hidden')
                                    phase1.classList.remove('hidden')  
                                }, 5500);
                                
                                
                            })
                        }
                        
                       
                        button3.addEventListener('click',(e)=>{

                            e.stopPropagation()
                            pointer2.remove()
                            pointer.remove()
                            notification.remove() 
                            subtracted--
                            console.log('cancel _count is');
                            stop = true
                            btn3_element.remove()

                            let listed2 = list__2.querySelectorAll('.item')
                            for (let i = 0; i < listed2.length; i++) {

                                console.log(listed2[i]);
                                if (listed2[i].classList.contains('hidden')){
                                    console.log(listed2[i]);
                                    listed2[i].classList.remove('hidden')
                                    listed2[i].classList.add('margin_reducer')

                                    break 
                                }  
                                  
                            }


                            if (((list__2.children.length)===1) && list__2.firstElementChild.classList.contains('item3')) {
                                console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                                row2.classList.remove('shorter')
                                id_row3.style.animation =`reverse-horizon 0.5s linear`
                            }

                            if ((list1.children.length)===1 && list1.firstElementChild.classList.contains('item3')) {
                                reducer.classList.add('reducer') 
                                row1.childNodes[1].classList.remove('active')
                                reducer.classList.remove('grower')
                                setTimeout(() => {
                                row1.classList.add('hidden')
                                row1.childNodes[1].classList.add('remove')  
                                }, 500);
                                setTimeout(() => {
                                    button3_element.remove()
                                }, 1000);
                                    
                            }
                            else{
                                button3_element.remove()
                                
                            }
                                


                            

                            
    

                           
                        })
                    }

                    if (list1.querySelector(`.item${list1.children.length} .top-button`) && list1.children.length>3 ){
                        button4 = list1.querySelector(`.item${list1.children.length} .top-button`)
                        button4_element = list1.querySelector(`.item${list1.children.length}`)
                        let lii = list1.querySelectorAll('.item')
                        let span_box = []
                        let q_span = list1.querySelectorAll(`.item${list1.children.length} .question span`)
                        q_span.forEach((span)=>{
                            if (span.classList.contains('bordermaker2')) {
                                span_box.push(`-${span.innerHTML}`)    
                            }
                            else{
                                span_box.push(span.innerHTML)
                            }
                        })

                        button4_element.addEventListener('click', (e)=>{
                            e.stopPropagation() 
                            let Texts
                            let storer=[]
                            console.log(rev_solved_accumulator.length);
                            
                            function finding_numeral(span_box ,storer) {
                                
                                for (let i = 0; i < rev_solved_accumulator.length; i++) {
                                    console.log(rev_solved_accumulator[i])
                                    console.log(span_box.join(''));

                                    if(rev_solved_accumulator[i][1] === span_box.join('')){
                                        storer.push(rev_solved_accumulator[i])

                                        console.log(storer);
                                        break
                                    }   
                                    
                                }
                                
                            }
                            
                            finding_numeral(span_box,storer) 
                            console.log(storer)
                            Texts = writeText4(storer[0])   
                            section_transitioning2()

                            setTimeout(() => {
                                phase0_1.classList.add('hidden')
                                phase1.classList.remove('hidden')  
                            }, 5500);
                            
                            
                        })
                        
                       
                        button4.addEventListener('click',(e)=>{

                            e.stopPropagation()
                            
                            pointer2.remove()
                            pointer.remove()
                            notification.remove() 
                            subtracted--
                            console.log('bro, over here bt' );
                            stop = true
                            
                            btn4_element.remove()
                            let listed2 = list__2.querySelectorAll('.item')
                            for (let i = 0; i < listed2.length; i++) {

                                console.log(listed2[i]);
                                if (listed2[i].classList.contains('hidden')){
                                    console.log(listed2[i]);
                                    listed2[i].classList.remove('hidden')
                                    listed2[i].classList.add('margin_reducer')

                                    break 
                                }  
                                  
                            }



                            if (((list__2.children.length)===1 && !(list__2.firstElementChild.classList.contains(`.item3`)) && !(list__2.firstElementChild.classList.contains(`.item2`)))) {
                                console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                                row2.classList.remove('shorter')
                                id_row3.style.animation =`reverse-horizon 0.5s linear`
                                

                                setTimeout(() => {
                                    section2.classList.add('hidden')
                                    row2.classList.add('enlarger')
                                    
                                }, 300)
                                                
                                                
                            }

                            if ((list1.children.length)===1 && !(list1.firstElementChild.classList.contains(`.item3`)) && !(list1.firstElementChild.classList.contains(`.item2`))) {
                                console.log('it worked ' );
                                
                                reducer.classList.add('reducer') 
                                row1.childNodes[1].classList.remove('active')
                                reducer.classList.remove('grower')
                                setTimeout(() => {
                                row1.classList.add('hidden')
                                row1.childNodes[1].classList.add('remove')  
                                }, 500);
                                setTimeout(() => {
                                    button4_element.remove()
                                }, 1000);
                                    
                            }
                            else{
                                button4_element.remove()
                                
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
                let lii = list1.querySelectorAll('.item')
                let span_box = []
                let q_span = list1.querySelectorAll('.item1 .question span')
                q_span.forEach((span)=>{
                    if (span.classList.contains('bordermaker2')) {
                        span_box.push(`-${span.innerHTML}`)    
                    }
                    else{
                        span_box.push(span.innerHTML)
                    }
                })

                if (marker_2 === 1) {
                    marker_1 = 0;
                    marker_3 = 0;

                    button1_element.addEventListener('click', (e)=>{
                        e.stopPropagation() 
                        let Texts
                        let storer=[]
                        console.log(rev_solved_accumulator.length);
                        
                        function finding_numeral(span_box ,storer) {
                            
                            for (let i = 0; i < rev_solved_accumulator.length; i++) {
                                console.log(rev_solved_accumulator[i])
                                console.log(span_box.join(''));
    
                                if(rev_solved_accumulator[i][1] === span_box.join('')){
                                    storer.push(rev_solved_accumulator[i])
    
                                    console.log(storer);
                                    break
                                }   
                                
                            }
                            
                        }
                        
                        finding_numeral(span_box,storer) 
                        console.log(storer)
                        Texts = writeText4(storer[0])   
                        section_transitioning2()
    
                        setTimeout(() => {
                            phase0_1.classList.add('hidden')
                            phase1.classList.remove('hidden')  
                        }, 5500);
                        
                        
                    })




                }




                button1.addEventListener('click',(e)=>{

                    e.stopPropagation()  
                    pointer2.remove()
                    pointer.remove()
                    notification.remove() 
                    subtracted--
                    
                    stop = true
                    button1_element.remove()
                    btn1_element.remove()

                    let listed2 = list__2.querySelectorAll('.item')
                            for (let i = 0; i < listed2.length; i++) {

                                console.log(listed2[i]);
                                if (listed2[i].classList.contains('hidden')){
                                    console.log(listed2[i]);
                                    listed2[i].classList.remove('hidden')
                                    listed2[i].classList.add('margin_reducer')

                                    break 
                                }  
                                  
                            }
                    

                    console.log(list1.children.length);

                    if (!(list__2.children.length)) {
                        console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                        row2.classList.remove('shorter')
                        id_row3.style.animation =`reverse-horizon 0.5s linear`
                        

                        setTimeout(() => {
                            section2.classList.add('hidden')
                            row2.classList.add('enlarger')
                            
                        }, 300)

                    }
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

                        
                        

                    }

                })
            }  

            
            
        



        }
        else if (!(+info[0])) {

            
            let stop = false
            

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

            console.log(list1)
            if (list1) {
                if (list1.children.length===0) {
                    marker_1 = 1;
                    marker_2 = 1;
                    marker_1_2nd =1;
                    marker_2_2nd =1;
                    marker_1_3rd =1;
                    marker_2_3rd =1;

                    let time_element = document.createElement('p')
                    let time_element2 = document.createElement('p')
                    

                    time_element.classList.add('time')
                    time_element2.classList.add('time')

                    time_regulator1(time_element,stop)
                    time_regulator1(time_element2,stop)

                    made.appendChild(time_element)
                    made2.appendChild(time_element2)

                    
                    writeText3(made)
                    writeText3(made2)
                    made.classList.add('item1')
                    made2.classList.add('item1')
                    console.log(made2);
                    
                    
                }
                else if (list1.children.length===1) {
                    let time_element = document.createElement('p')
                    let time_element2 = document.createElement('p')
                    time_element.classList.add('time')
                    time_element2.classList.add('time')
                    time_regulator2(time_element,stop)
                    time_regulator2(time_element2,stop)
                    made.appendChild(time_element)
                    made2.appendChild(time_element2)
                    writeText3(made)
                    writeText3(made2)
                    made.classList.add('item2')
                    made2.classList.add('item2')
                    
                }
                else if (list1.children.length===2) {
                    let time_element = document.createElement('p')
                    let time_element2 = document.createElement('p')
                    time_element.classList.add('time')
                    time_element2.classList.add('time')
                    time_regulator3(time_element,stop)
                    time_regulator3(time_element2,stop)
                    made.appendChild(time_element)
                    made2.appendChild(time_element2)
                    writeText3(made)
                    writeText3(made2)
                    made.classList.add('item3')
                    made2.classList.add('item3')
                }

                else if (list1.children.length>2){
                    let time_element = document.createElement('p')
                    let time_element2 = document.createElement('p')
                    time_element.classList.add('time')
                    time_element2.classList.add('time')
                    time_regulator3(time_element,stop)
                    time_regulator3(time_element2,stop)
                    made.appendChild(time_element)
                    made2.appendChild(time_element2)
                    writeText3(made)
                    writeText3(made2)
                    
                    made.classList.add(`item${list1.children.length+1}`)
                    made2.classList.add(`item${list1.children.length+1}`)
    
                    
                }
            }



            if (((list__2.children.length)>0)){
                let listed1=list__2.querySelectorAll('.item')

                if (list__2.children.length>1) {

                    listed1.forEach((listed, index)=>{
                                if (index>1){
                                    listed.classList.add('hidden')
                                }
                            })
                        }

                  list__2.children[0].classList.add('left_marginer')
                setTimeout(() => {
                    list__2.prepend(made2)
                    list__2.children[0].classList.remove('left_marginer')
                    list__2.children[1].classList.remove('left_marginer')


                    if (list__2.querySelector('.item2 .top-button')){
                        btn2 = list__2.querySelector(`.item2 .top-button`)
                        btn2_element = list__2.querySelector(`.item2`)
                        let span_box = []
                        let q_question = list__2.querySelector(`.item2 .question`)
                        console.log(q_question.innerHTML);
                        span_box.push(q_question.innerHTML)


                        if (marker_3_2nd === 1) {
                            marker_1_2nd = 0;
                            marker_2_2nd = 0;
                            btn2_element.addEventListener('click', (e)=>{
                                e.stopPropagation() 
                                let storer=[]
                                console.log(rev_solved_accumulator.length);
                                console.log(rev_solved_accumulator);
                                
                                function finding_numeral(span_box ,storer) {
                                    
                                    for (let i = 0; i < rev_solved_accumulator.length; i++) {
                                        console.log(rev_solved_accumulator[i])
                                        console.log(span_box);

                                        if(rev_solved_accumulator[i][1] === +span_box){
                                            storer.push(rev_solved_accumulator[i])

                                            console.log(storer);
                                            break
                                        }   
                                        
                                    }
                                    
                                }
                                
                                finding_numeral(span_box,storer) 
                                console.log(storer)
                                writeText6(storer[0])
                                section_transitioning2()

                                setTimeout(() => {
                                    phase0_1.classList.add('hidden')
                                    phase1.classList.remove('hidden')  
                                }, 5500);
                                
                            })
                        }
                        

                        btn2.addEventListener('click',(e)=>{
                            e.stopPropagation()               
                            pointer2.remove()
                            pointer.remove()
                            notification.remove() 
                            subtracted--
                            stop = true
                            console.log('cancel _count is');


                            if ((list__2.children.length)===1 && list__2.firstElementChild.classList.contains('item2')) {
                                btn2_element.remove()
                                

                                row2.classList.remove('shorter')
                                id_row3.style.animation =`reverse-horizon 0.5s linear`
                                setTimeout(() => {
                                    section2.classList.add('hidden')
                                    row2.classList.add('enlarger')  
                                }, 300)  
                                
                                                
                            }
                            else{
                                btn2_element.remove()
                                
                                let listed2 = list__2.querySelectorAll('.item')
                            for (let i = 0; i < listed2.length; i++) {

                                console.log(listed2[i]);
                                if (listed2[i].classList.contains('hidden')){
                                    console.log(listed2[i]);
                                    listed2[i].classList.remove('hidden')
                                    listed2[i].classList.add('margin_reducer')

                                    break 
                                }  
                                  
                            }
                                
                            }


                            

            
                            if ((list1.children.length)===1 && list1.firstElementChild.classList.contains('item2')) {
                                reducer.classList.add('reducer') 
                                row1.childNodes[1].classList.remove('active')
                                reducer.classList.remove('grower')
                                setTimeout(() => {
                                row1.classList.add('hidden')
                                row1.childNodes[1].classList.add('remove')  
                                }, 500);
                                setTimeout(() => {
                                    button2_element.remove()
                                }, 1000);
                                    
                            }
                            else{
                                button2_element.remove()
                                
                            }

                                            
                        })
                    }
                    if (list__2.querySelector('.item3 .top-button')){
                        btn3 = list__2.querySelector(`.item3 .top-button`)
                        btn3_element = list__2.querySelector(`.item3`)
                        let span_box = []
                        let q_question = list__2.querySelector(`.item3 .question`)
                        console.log(q_question.innerHTML);
                        span_box.push(q_question.innerHTML)


                        if (marker_3_3rd === 1) {
                            marker_1_3rd = 0;
                            marker_2_3rd = 0;
                            btn3_element.addEventListener('click', (e)=>{
                                e.stopPropagation() 
                                let storer=[]
                                console.log(rev_solved_accumulator.length);
                                console.log(rev_solved_accumulator);
                                
                                function finding_numeral(span_box ,storer) {
                                    
                                    for (let i = 0; i < rev_solved_accumulator.length; i++) {
                                        console.log(rev_solved_accumulator[i])
                                        console.log(span_box);

                                        if(rev_solved_accumulator[i][1] === +span_box){
                                            storer.push(rev_solved_accumulator[i])

                                            console.log(storer);
                                            break
                                        }   
                                        
                                    }
                                    
                                }
                                
                                finding_numeral(span_box,storer) 
                                console.log(storer)
                                writeText6(storer[0])
                                section_transitioning2()

                                setTimeout(() => {
                                    phase0_1.classList.add('hidden')
                                    phase1.classList.remove('hidden')  
                                }, 5500);
                                
                            })
                        }


                

                        btn3.addEventListener('click',(e)=>{
                            e.stopPropagation()
                            
                            pointer2.remove()
                            pointer.remove()
                            notification.remove() 
                            subtracted--
                            stop = true

                            if ((list__2.children.length)===1 && list__2.firstElementChild.classList.contains('item3')) {
                                btn3_element.remove()
                                console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                                row2.classList.remove('shorter')
                                id_row3.style.animation =`reverse-horizon 0.5s linear`
                                setTimeout(() => {
                                    section2.classList.add('hidden')
                                    row2.classList.add('enlarger')
                                    
                                }, 300)                 
                                                
                            }
                            else{
                                btn3_element.remove()

                                let listed2 = list__2.querySelectorAll('.item')
                            for (let i = 0; i < listed2.length; i++) {

                                console.log(listed2[i]);
                                if (listed2[i].classList.contains('hidden')){
                                    console.log(listed2[i]);
                                    listed2[i].classList.remove('hidden')
                                    listed2[i].classList.add('margin_reducer')

                                    break 
                                }  
                                  
                            }
                            }
            
                            if ((list1.children.length)===1 && list1.firstElementChild.classList.contains('item3')) {
                                reducer.classList.add('reducer') 
                                row1.childNodes[1].classList.remove('active')
                                reducer.classList.remove('grower')
                                setTimeout(() => {
                                row1.classList.add('hidden')
                                row1.childNodes[1].classList.add('remove')  
                                }, 500);
                                setTimeout(() => {
                                    button3_element.remove()
                                }, 1000);
                                    
                            }
                            else{
                                button3_element.remove()
                                
                            }
                                                
                        })
                    }

                    if ((list__2.querySelector(`.item${list__2.children.length} .top-button`) && list__2.children.length>3 )){
                        
                         btn4 = list__2.querySelector(`.item${list__2.children.length} .top-button`)
                         btn4_element = list__2.querySelector(`.item${list__2.children.length}`)
                         let span_box = []
                         let q_question = list__2.querySelector(`.item${list__2.children.length} .question`)
                         console.log(q_question.innerHTML);
                         span_box.push(q_question.innerHTML)


                        btn4_element.addEventListener('click', (e)=>{
                            e.stopPropagation() 
                            let storer=[]
                            console.log(rev_solved_accumulator.length);
                            console.log(rev_solved_accumulator);
                            
                            function finding_numeral(span_box ,storer) {
                                
                                for (let i = 0; i < rev_solved_accumulator.length; i++) {
                                    console.log(rev_solved_accumulator[i])
                                    console.log(span_box);

                                    if(rev_solved_accumulator[i][1] === +span_box){
                                        storer.push(rev_solved_accumulator[i])

                                        console.log(storer);
                                        break
                                    }   
                                    
                                }
                                
                            }
                            
                            finding_numeral(span_box,storer) 
                            console.log(storer)
                            writeText6(storer[0])
                            section_transitioning2()

                            setTimeout(() => {
                                phase0_1.classList.add('hidden')
                                phase1.classList.remove('hidden')  
                            }, 5500);
                            
                        })

                        btn4.addEventListener('click',(e)=>{
                            
                            e.stopPropagation()  
                            pointer2.remove()
                            pointer.remove()
                            notification.remove() 
                            subtracted--
                            stop = true
                            
                            
                            if ((((list__2.children.length)===1 && !(list__2.firstElementChild.classList.contains(`.item3`)) && !(list__2.firstElementChild.classList.contains(`.item2`))))) {
                                btn4_element.remove()
                                console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                                row2.classList.remove('shorter')
                                id_row3.style.animation =`reverse-horizon 0.5s linear`
                                

                                setTimeout(() => {
                                    section2.classList.add('hidden')
                                    row2.classList.add('enlarger')
                                    
                                }, 300)                  
                            }
                            else{
                                btn4_element.remove()

                                let listed2 = list__2.querySelectorAll('.item')
                            for (let i = 0; i < listed2.length; i++) {

                                console.log(listed2[i]);
                                if (listed2[i].classList.contains('hidden')){
                                    console.log(listed2[i]);
                                    listed2[i].classList.remove('hidden')
                                    listed2[i].classList.add('margin_reducer')

                                    break 
                                }  
                                  
                            }
                            }

                            if (((list1.children.length)===1 && !(list1.firstElementChild.classList.contains(`.item3`)) && !(list1.firstElementChild.classList.contains(`.item2`)))) {
                                reducer.classList.add('reducer') 
                                row1.childNodes[1].classList.remove('active')
                                reducer.classList.remove('grower')
                                setTimeout(() => {
                                row1.classList.add('hidden')
                                row1.childNodes[1].classList.add('remove')  
                                }, 500);
                                setTimeout(() => {
                                    button4_element.remove()
                                }, 1000);
                                    
                            }
                            else{
                                button4_element.remove()
                                
                                
                            }
                                                
                        })

                    }
                    
                }, 300);

            }
            else{
                list__2.prepend(made2)

            }
            if (list__2.querySelector(`.item1 .top-button`)){
                btn1 = list__2.querySelector(`.item1 .top-button`)
                btn1_element = list__2.querySelector(`.item1`)
                let lii = list__2.querySelectorAll('.item')
                let span_box = []
                let q_question = list__2.querySelector(`.item1 .question`)
                console.log(q_question.innerHTML);
                span_box.push(q_question.innerHTML)


                if (marker_3 === 1) {
                    marker_1 = 0;
                    marker_2 = 0;
                    btn1_element.addEventListener('click', (e)=>{
                        e.stopPropagation() 
                        let Texts
                        let storer=[]
                        console.log(rev_solved_accumulator.length);
                        console.log(rev_solved_accumulator);
                        
                        function finding_numeral(span_box ,storer) {
                            
                            for (let i = 0; i < rev_solved_accumulator.length; i++) {
                                console.log(rev_solved_accumulator[i])
                                console.log(span_box);

                                if(rev_solved_accumulator[i][1] === +span_box){
                                    storer.push(rev_solved_accumulator[i])

                                    console.log(storer);
                                    break
                                }   
                                
                            }
                            
                        }
                        
                        finding_numeral(span_box,storer) 
                        console.log(storer)
                        writeText6(storer[0])
                        section_transitioning2()

                        setTimeout(() => {
                            phase0_1.classList.add('hidden')
                            phase1.classList.remove('hidden')  
                        }, 5500);
                        
                    })
                }
                

                

                btn1.addEventListener('click',(e)=>{


                    e.stopPropagation()
                    pointer2.remove()
                    pointer.remove()    
                    notification.remove() 
                    subtracted--
                    stop = true
                    btn1_element.remove()
                    button1_element.remove()


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
                    }
                    


                    
                    if (!(list__2.children.length)) {
                        console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                        row2.classList.remove('shorter')
                        id_row3.style.animation =`reverse-horizon 0.5s linear`
                        setTimeout(() => {
                            section2.classList.add('hidden')
                            row2.classList.add('enlarger')
                            
                        }, 300)

                        
                       
                                        
                                        
                    }
                                        
                })
            }
                 
 

        
            if (((list1.children.length)>0)){
                console.log('aleerttttttttttttttttttt');
                list1.children[0].classList.add('marginer')

                setTimeout(() => {
                    list1.prepend(made) 
                    list1.children[0].classList.remove('marginer')
                    list1.children[1].classList.remove('marginer')


                    if (list1.querySelector('.item2 .top-button')){
                        

                        button2 = list1.querySelector(`.item2 .top-button`)
                        button2_element = list1.querySelector(`.item2`)
                        let span_box = []
                        let q_question = list1.querySelector(`.item2 .question`)
                        console.log(q_question.innerHTML);
                        span_box.push(q_question.innerHTML)


                        if (marker_3_2nd === 1) {
                            marker_1_2nd = 0;
                            marker_2_2nd = 0;
                            button2_element.addEventListener('click', (e)=>{
                                e.stopPropagation() 
                                let storer=[]
                                console.log(rev_solved_accumulator.length);
                                console.log(rev_solved_accumulator);
                                
                                function finding_numeral(span_box ,storer) {
                                    
                                    for (let i = 0; i < rev_solved_accumulator.length; i++) {
                                        console.log(rev_solved_accumulator[i])
                                        console.log(span_box);

                                        if(rev_solved_accumulator[i][1] === +span_box){
                                            storer.push(rev_solved_accumulator[i])

                                            console.log(storer);
                                            break
                                        }   
                                        
                                    }
                                    
                                }
                                
                                finding_numeral(span_box,storer) 
                                console.log(storer)
                                writeText6(storer[0])
                                section_transitioning2()

                                setTimeout(() => {
                                    phase0_1.classList.add('hidden')
                                    phase1.classList.remove('hidden')  
                                }, 5500);
                                
                            })
                        }




                       
                        button2.addEventListener('click',(e)=>{
                            e.stopPropagation() 
                            stop = true
                            button2_element.remove()
                            btn2_element.remove()
        
        
                            let listed2 = list__2.querySelectorAll('.item')
                                    for (let i = 0; i < listed2.length; i++) {
        
                                        console.log(listed2[i]);
                                        if (listed2[i].classList.contains('hidden')){
                                            console.log(listed2[i]);
                                            listed2[i].classList.remove('hidden')
                                            listed2[i].classList.add('margin_reducer')
        
                                            break 
                                        }  
                                          
                                    }
                            
        
                            console.log(list1.children.length);
        
                            if (!(list__2.children.length)) {
                                console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                                row2.classList.remove('shorter')
                                id_row3.style.animation =`reverse-horizon 0.5s linear`
                                
        
                                setTimeout(() => {
                                    section2.classList.add('hidden')
                                    row2.classList.add('enlarger')
                                    
                                }, 300)
        
                            }
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
        
                                
                                
        
                            }
        
                        })
                    }




                    if (list1.querySelector('.item3 .top-button')){
                        button3 = list1.querySelector(`.item3 .top-button`)
                        button3_element = list1.querySelector(`.item3`)
                        let span_box = []
                        let q_question = list1.querySelector(`.item3 .question`)
                        console.log(q_question.innerHTML);
                        span_box.push(q_question.innerHTML)


                        if (marker_3_3rd === 1) {
                            marker_1_3rd = 0;
                            marker_2_3rd = 0;
                            button3_element.addEventListener('click', (e)=>{
                                e.stopPropagation() 
                                let storer=[]
                                console.log(rev_solved_accumulator.length);
                                console.log(rev_solved_accumulator);
                                
                                function finding_numeral(span_box ,storer) {
                                    
                                    for (let i = 0; i < rev_solved_accumulator.length; i++) {
                                        console.log(rev_solved_accumulator[i])
                                        console.log(span_box);

                                        if(rev_solved_accumulator[i][1] === +span_box){
                                            storer.push(rev_solved_accumulator[i])

                                            console.log(storer);
                                            break
                                        }   
                                        
                                    }
                                    
                                }
                                
                                finding_numeral(span_box,storer) 
                                console.log(storer)
                                writeText6(storer[0])
                                section_transitioning2()

                                setTimeout(() => {
                                    phase0_1.classList.add('hidden')
                                    phase1.classList.remove('hidden')  
                                }, 5500);
                                
                            })
                        }

                         button3.addEventListener('click',(e)=>{
                            e.stopPropagation() 
                            stop = true
                            button3_element.remove()
                            btn3_element.remove()
        
        
                            let listed2 = list__2.querySelectorAll('.item')
                                    for (let i = 0; i < listed2.length; i++) {
        
                                        console.log(listed2[i]);
                                        if (listed2[i].classList.contains('hidden')){
                                            console.log(listed2[i]);
                                            listed2[i].classList.remove('hidden')
                                            listed2[i].classList.add('margin_reducer')
        
                                            break 
                                        }  
                                          
                                    }
                            
        
                            console.log(list1.children.length);
        
                            if (!(list__2.children.length)) {
                                console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                                row2.classList.remove('shorter')
                                id_row3.style.animation =`reverse-horizon 0.5s linear`
                                
        
                                setTimeout(() => {
                                    section2.classList.add('hidden')
                                    row2.classList.add('enlarger')
                                    
                                }, 300)
        
                            }
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
        
                                
                                
        
                            }
        
                        })
                       
                        
                    }

                    if (list1.querySelector(`.item${list1.children.length} .top-button`)  && list1.children.length>3){

                        
                         button4 = list1.querySelector(`.item${list1.children.length} .top-button`)
                         button4_element = list1.querySelector(`.item${list1.children.length}`)
                         let span_box = []
                         let q_question = list1.querySelector(`.item${list1.children.length} .question`)
                         console.log(q_question.innerHTML);
                         span_box.push(q_question.innerHTML)


                        button4_element.addEventListener('click', (e)=>{
                            e.stopPropagation() 
                            let storer=[]
                            console.log(rev_solved_accumulator.length);
                            console.log(rev_solved_accumulator);
                            
                            function finding_numeral(span_box ,storer) {
                                
                                for (let i = 0; i < rev_solved_accumulator.length; i++) {
                                    console.log(rev_solved_accumulator[i])
                                    console.log(span_box);

                                    if(rev_solved_accumulator[i][1] === +span_box){
                                        storer.push(rev_solved_accumulator[i])

                                        console.log(storer);
                                        break
                                    }   
                                    
                                }
                                
                            }
                            
                            finding_numeral(span_box,storer) 
                            console.log(storer)
                            writeText6(storer[0])
                            section_transitioning2()

                            setTimeout(() => {
                                phase0_1.classList.add('hidden')
                                phase1.classList.remove('hidden')  
                            }, 5500);
                            
                        })
                       
                        button4.addEventListener('click',(e)=>{

                            e.stopPropagation()
                            
                            pointer2.remove()
                            pointer.remove()
                            notification.remove() 
                            subtracted--
                            console.log('bro, over here bt' );
                            stop = true
                            
                            btn4_element.remove()
                            let listed2 = list__2.querySelectorAll('.item')
                            for (let i = 0; i < listed2.length; i++) {

                                console.log(listed2[i]);
                                if (listed2[i].classList.contains('hidden')){
                                    console.log(listed2[i]);
                                    listed2[i].classList.remove('hidden')
                                    listed2[i].classList.add('margin_reducer')

                                    break 
                                }  
                                  
                            }



                            if (((list__2.children.length)===1 && !(list__2.firstElementChild.classList.contains(`.item3`)) && !(list__2.firstElementChild.classList.contains(`.item2`)))) {
                                console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                                row2.classList.remove('shorter')
                                id_row3.style.animation =`reverse-horizon 0.5s linear`
                                

                                setTimeout(() => {
                                    section2.classList.add('hidden')
                                    row2.classList.add('enlarger')
                                    
                                }, 300)
                                                
                                                
                            }

                            if ((list1.children.length)===1 && !(list1.firstElementChild.classList.contains(`.item3`)) && !(list1.firstElementChild.classList.contains(`.item2`))) {
                                console.log('it worked ' );
                                
                                reducer.classList.add('reducer') 
                                row1.childNodes[1].classList.remove('active')
                                reducer.classList.remove('grower')
                                setTimeout(() => {
                                row1.classList.add('hidden')
                                row1.childNodes[1].classList.add('remove')  
                                }, 500);
                                setTimeout(() => {
                                    button4_element.remove()
                                }, 1000);
                                    
                            }
                            else{
                                button4_element.remove()
                                
                            }
                        
      
                        })
                    }
                    
                }, 300)

            }
            else{
                list1.prepend(made)

            }  
            
            if (list1.querySelector('.item1 .top-button')){
            
                button1 = list1.querySelector(`.item1 .top-button`)
                button1_element = list1.querySelector(`.item1`)
                let span_box = []
                let q_question = list1.querySelector(`.item1 .question`)
                console.log(q_question.innerHTML);
                span_box.push(q_question.innerHTML)


                if (marker_3 === 1) {
                    marker_1 = 0;
                    marker_2 = 0;
                    button1_element.addEventListener('click', (e)=>{
                        e.stopPropagation() 
                        let storer=[]
                        console.log(rev_solved_accumulator.length);
                        console.log(rev_solved_accumulator);
                        
                        function finding_numeral(span_box ,storer) {
                            
                            for (let i = 0; i < rev_solved_accumulator.length; i++) {
                                console.log(rev_solved_accumulator[i])
                                console.log(span_box);

                                if(rev_solved_accumulator[i][1] === +span_box){
                                    storer.push(rev_solved_accumulator[i])

                                    console.log(storer);
                                    break
                                }   
                                
                            }
                            
                        }
                        
                        finding_numeral(span_box,storer) 
                        console.log(storer)
                        writeText6(storer[0])
                        section_transitioning2()

                        setTimeout(() => {
                            phase0_1.classList.add('hidden')
                            phase1.classList.remove('hidden')  
                        }, 5500);
                        
                    })
                }
               
                 button1.addEventListener('click',(e)=>{
                    e.stopPropagation() 
                    stop = true
                    button1_element.remove()
                    btn1_element.remove()


                    let listed2 = list__2.querySelectorAll('.item')
                            for (let i = 0; i < listed2.length; i++) {

                                console.log(listed2[i]);
                                if (listed2[i].classList.contains('hidden')){
                                    console.log(listed2[i]);
                                    listed2[i].classList.remove('hidden')
                                    listed2[i].classList.add('margin_reducer')

                                    break 
                                }  
                                  
                            }
                    

                    console.log(list1.children.length);

                    if (!(list__2.children.length)) {
                        console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
                        row2.classList.remove('shorter')
                        id_row3.style.animation =`reverse-horizon 0.5s linear`
                        

                        setTimeout(() => {
                            section2.classList.add('hidden')
                            row2.classList.add('enlarger')
                            
                        }, 300)

                    }
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

                        
                        

                    }

                })
            }
            
        }

       
        
    }

    Number_of_items(list__2.children.length+1)
 
    

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
        setTimeout(() => {
            activity_listener()
            activity_updater()
        }, 2000);
        

        
        
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

    solved = solver(question,letters)

    console.log(solved[solved.length-1]);

    if (!(solved===undefined)) {
        rev_solved_accumulator.unshift(solved)
       

        setTimeout(() => {
            console.log(rev_solved_accumulator); 
        }, 2000);
   
    }



    solvings()
    


    setTimeout(() => {
        activity_listener()
        activity_updater()   
    }, 900);
    



    

    const displayed = displayer(solved)

    
    
    item_creator(solved)
    
    notif(displayed)
    activity_listener()
    activity_updater()   

    setTimeout(() => {
        console.log(list__2.children);
        console.log(list__2.children.length);
        
    }, 1000);
    
    
})



copy.addEventListener('click', ()=>{
    const Textarea = document.createElement('textarea')
    let copied

    if (solved && problem.classList.contains('hidden')) {
        if ((solved[0]===0)){
            copied = solved[1]


        }
        else if ((+solved[0]) && !(solved[0]===0)){
            copied = solved[0]

        }
        else if (!(+solved[0])){
            copied = dashed.join('')
            console.log(copied)

        }
    }


    if (copied===' ' ) {
        return null
    }

    else if(copied===''){
        return null
    
    }
    else{
        Textarea.value = copied
        document.body.appendChild(Textarea)
        Textarea.select()
        document.execCommand('copy')
        Textarea.remove()
        alert('Value copied to clipboard')
    }
})






