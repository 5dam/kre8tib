import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Services = () => {

  useEffect(() => {
    let boxes = gsap.utils.toArray("#container .img-1"),
    container = document.querySelector("#container"),
    text = document.querySelector("#text"),
    padding = gsap.getProperty(container, "paddingTop", "px"),
    // create a ScrollTrigger for each box that we can use to calculate snapping (we'll look at the "start" of each in the onRefresh)
    snapTriggers = boxes.map(box => ScrollTrigger.create({
      trigger: box,
      start: "top " + padding + "px"
    })),
    snaps = []; // where we'll store the progress value for each box's ScrollTrigger (start)

    ScrollTrigger.create({
      trigger: '#container',
      markers: true,
      pin: '#text',
      pinSpacing: false,
      start: "top top",
      end: () => "+=" + (boxes[boxes.length-1].getBoundingClientRect().top - boxes[0].getBoundingClientRect().top),
      onRefresh: self => {
        // re-populate the "snaps" Array with the progress values for where each box hits the target spot.
        let distance = self.end - self.start;
        snapTriggers.forEach((trigger, i) => snaps[i] = (trigger.start - self.start) / distance);
      },
      snap: snaps
    });

    // for swapping in the text for each section
    const arr = [
    { text: 'Hello 1'},
      { text: 'Hello 2'},
      { text: 'Hello 3'},
      { text: 'Hello 4'},
      { text: 'Hello 5'},
      { text: 'Hello 6'},
      { text: 'Hello 7'},
      { text: 'Hello 8'},
      { text: 'Hello 9'},
    ]

    boxes.forEach((box, i) => {
      ScrollTrigger.create({
        trigger: box,
        start: "top center",
        end: "bottom center",
        onToggle: self => {
          text.style.opacity = 0;
          if (self.isActive) {
            // you could animate this in (fade it or whatever)
            setTimeout(() => {
          text.style.opacity = 1;
              text.innerText = arr[i].text;
    }, 500)
            
            
          }
        }
      });
    });

  }, [])

  return (
    <>
      {/* <div id='container' className='mx-auto container flex'>
        <div className='h-screen w-full text-center'>
            <div id='section' className='h-screen'>section 1</div>
        </div>
        <div className='w-full text-center'>
            <div className='h-screen'>image 1</div>
            <div className='h-screen'>image 2</div>
            <div className='h-screen'>image 3</div>
        </div>
      </div> */}

      <div className='bg-primary font-montserrat'>
        <div id="container" className="max-w-5xl mx-auto w-full flex py-20">
            <div id="text" className="w-1/2 flex items-center">
              <p>Hello 1</p>
            </div>
            <div className="w-1/2 space-y-16 text-white text-2xl">
              <div className="p-4 flex items-center">
                <img className='h-screen img-1' src="https://cloudfour.com/examples/img-currentsrc/images/kitten-large.png" />
              </div>
              <div className="p-4 flex items-center">
                <img className='h-screen img-1' src="https://cloudfour.com/examples/img-currentsrc/images/kitten-large.png" />
              </div>
              <div className="p-4 flex items-center">
                <img className='img-1 h-screen' src="https://cloudfour.com/examples/img-currentsrc/images/kitten-large.png" />
              </div>
              <div className="p-4 flex items-center">
                <img className='h-screen img-1' src="https://cloudfour.com/examples/img-currentsrc/images/kitten-large.png" />
              </div>
              
            </div>
        </div>
      </div>
     
    </>
  )
}

export default Services