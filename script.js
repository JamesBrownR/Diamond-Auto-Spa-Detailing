---
---
         // script.js
        // --- Lightbox Logic s---


        // --- Lightbox Logic s---
        function openLightbox(imgSrc) {
            const modal = document.getElementById("myLightbox");
            const modalImg = document.getElementById("lightboxImg");
            modal.style.display = "flex";
            modalImg.src = imgSrc;
        }

        function closeLightbox() {
            document.getElementById("myLightbox").style.display = "none";
        }

      // --- Reviews Data ---
       const reviews = [
    { "name": "Kevin Daniels", "rating": 5, "body": "Fantastic job! Andrew went above and beyond, and I highly recommend him!", "source": "google" },
    { "name": "Roxanna Wright", "rating": 5, "body": "Diamond Auto Spa does AMAZING work! Our Jeep Grand Cherokee looks like it just rolled off the Showroom. Brilliant shine and gleaming interior. Andrew is very meticulous not missing any detail.♥️", "source": "google" },
    { "name": "Bill Olsen", "rating": 5, "body": "My name is Bill Olsen and I have a 1972 Nova that I've owned for 12 years. Diamond auto spa came to my house today and detailed it. I'm having a hard time coming up with the right words to do the job justice. The car looks amazing. Better than it's EVER looked. They were here for a solid 8 hours and didn't miss anything. The car literally looks brand new. If you want your classic car show ready I would highly recommend them. If they can make 22 year old paint look new I can't imagine what they can do with a modern car. Check the website. You will not regret it. I've worked with several other retailers in the past and none of them even came close.", "source": "google" },
    { "name": "Cate Shanahan", "rating": 5, "body": "Me and my car are much happier now I no longer have to drive with shame I can drive with shine. Seriously though he does meticulous work and is very thoughtful and courteous and explains everything thoroughly. Exceeded expectations. He clearly loves cars and it shows", "source": "google" },
    { "name": "Justin Long", "rating": 5, "body": "Diamond Auto Spa did an excellent job on my Ford F150 Police Interceptor. I called him last minute and he was able to fit in a time for my detail just before my annual inspection. Was on time with a reasonable price for last minute. Would recommend!", "source": "google" },
    { "name": "Deez Kutz", "rating": 5, "body": "Attention to detail. Best service ever period!", "source": "google" },
    { "name": "Bob Schilling", "rating": 5, "body": "Andrew did a great job, truck looked like new again!", "source": "google" },
    { "name": "Colin", "rating": 5, "body": "Andrew did a great job. Had a tough issue with my Type R's windshield due to my mistake and after having him come out to try and fix it, my windshield is in a MUCH better state than it was before. He also gave the whole car a wash afterwards and it looks great! I thoroughly recommend giving him a chance if you need any detail work done on your vehicle.", "source": "google" },
    { "name": "Yours Truly", "rating": 5, "body": "I'm Pretty New To This Area And One Of The Reasons I Booked Is Due To The Wonderful Reviews I Read About The Job Andrew Does. I Own A Pretty Big SUV And Andrew Took His Entire Day To Make Sure That I Could Have A Vehicle That Would Make Me Proud And Happy, Inside And Out! He Really Does Go The Extra Mile For His Customers And I'm Glad This Is His Calling! Needless To Say I Will Definitely Book Again And Would Definitely Recommend! 10/10", "source": "google" },
    { "name": "Brittany Furse", "rating": 5, "body": "Andrew surpassed all my expectations! I have two small kids so I'm sure you can imagine how awful it was before. He took the time to get EVERY nook and cranny so you would never think that my kids are as messy as they are. He shampooed my seats and got all the stains out - I couldn't even tell you how many things had been spilled back there. I figured they would still be stained but at least look better than beforehand. When I went out to check everything at the end, I was shocked!!!! Needless to say that my car now has a no eating policy. I will be recommending Andrew to everyone. Trust me… worth every penny! Thank you Andrew for providing service and results beyond what I was hoping for!", "source": "google" },
    { "name": "Pierre Nimmer", "rating": 5, "body": "Andrew did an excellent job detailing both of my vehicles. They look brand new show room condition. He also fixed a paint chip on my truck, repainted the baja lights from weather damage, and repainted rusty screws in the baja rack. He is by far the best detailer i found in central Florida. He spent 4hrs on my suv, and 9hrs on my truck. Both look brand new. I think he charges a fair price and delivers +A quality work. I have hired cheaper auto detailers but they did poor work in 1-2hrs per vehicle and it was not worth the money. I think you will be very happy with Andrew.", "source": "google" },
    { "name": "B Thompson", "rating": 5, "body": "Absolutely earned a five-star review! Great communication, showed on time, understood and explained the scope of work, and worked for SEVEN HOURS to have my truck looking better than showroom new! I'm so glad to once again have an experienced professional I can trust to take care of my automobile. Looking forward to monthly maintenance, too. Thanks, Andrew! #GatorTundra", "source": "google" },
    { "name": "Nolan White", "rating": 5, "body": "Excellent work and excellent customer service.", "source": "google" },
    { "name": "Jolene Coates", "rating": 5, "body": "I couldn't be more impressed with the exceptional service from this new to me car detailer! My red SUV has truly never looked better—every inch is spotless, and the shine is unbelievable. Andrew's attention to detail and professionalism far exceeded my expectations. Highly recommend to anyone wanting their car to look brand-new again!", "source": "google" },
    { "name": "chris c", "rating": 5, "body": "Amazing! I've had my truck for 7 years now and I've had multiple professional details done over the years and can say with 100% confidence that Andrew is by far the best!! I feel like I just bought a new truck! Thanks again", "source": "google" },
    { "name": "Alysha Knapp", "rating": 5, "body": "Diamond Auto Spa Detailing did an excellent job on my car's interior! Their mobile service came right to my workplace, which made the whole process so easy. The inside looks spotless and refreshed. Super convenient, professional, and high-quality work. Highly recommend!", "source": "google" },
    { "name": "Ztrosper428", "rating": 5, "body": "This place is amazing! The owner was very friendly, very thorough and explained everything he was doing before he did it. He even gave me advice on how to properly care for my car and was VERY patient with my mom-mess car! I've never had my car so clean, it looks practically new (at 8 years old). Highly recommend, you can certainly tell when an owner takes pride in his work!", "source": "google" },
    { "name": "Johnson Pamela", "rating": 5, "body": "Made my CRV look like brand new. thank you so much. I recommend diamond Auto spa detailing to everyone", "source": "facebook" },
    { "name": "Lacy Shaffer", "rating": 5, "body": "Great work. Great personality. Very professional. Highly recommend", "source": "facebook" },
    { "name": "Chase Bean", "rating": 5, "body": "He made my 2020 ram 1500 limited look better then when I bought it from the dealership.", "source": "facebook" },
    { "name": "Chelsea Tomlinson", "rating": 5, "body": "I recently took my Ford F-150 to Diamond Auto Spa for a full detailing, and I couldn't be more impressed with the results! They meticulously cleaned every part of the interior—vacuuming the carpets and upholstery, and wiping down the dashboard and consoles with care. The customer service was top-notch, and the attention to detail was exactly what I was looking for. Andrew was punctual and friendly, I also love that he offers mobile detailing, so I didn't have to take time out of my day to drop the truck off. I highly recommend Diamond Auto Spa for anyone with a Ford F-150 or any vehicle.", "source": "facebook" },
    { "name": "Jacque Bennett", "rating": 5, "body": "My car looks amazing this company did a phenomenal job. It was super convenient he came to my work to detail it, I didn't have to travel or wait like with most retailers. 1000% will be using his services again. Got in all the crevices didn't leave any dust behind. Thank you again", "source": "facebook" },
    { "name": "Cindy Joyce", "rating": 5, "body": "I highly recommend Diamond Auto Spa... I just had my car detailed today and it looks amazing! It didn't even look this good the day I brought it home from the dealership! Perfection at its best!", "source": "facebook" },
    { "name": "Tj Nevins", "rating": 5, "body": "Just got my vehicle done by diamond auto spa. Very happy with the outcome of the detail. Andrew was very professional and I highly recommend", "source": "facebook" },
    { "name": "Katrena Murphy Kalmbach", "rating": 5, "body": "My SUV is used as a farm vehicle from hauling hay and feed to fishing and 3 kids. I have had many people tell me that they could deep clean my car and the only person to be able to fulfill that has been Andrew from Diamond Auto Spa. My car looked like it just came out of the dealership. Very reasonable price and very professional and keeps his word. I will never go anywhere else again! Thank you!", "source": "facebook" },
    { "name": "Michelle Selley", "rating": 5, "body": "Does a great job,takes his time, very personal will treat your vehicle like it's his own. recommend highly !!!! Five", "source": "facebook" },
    { "name": "Tony Bonasota", "rating": 5, "body": "Definitely did a great job on my car, he's very personable and very reasonably priced definitely give him a call.", "source": "facebook" },
    { "name": "Jonathan Wilson", "rating": 5, "body": "The professionalism and passion comes through in his work. Andrew took care of both my cars. One was pretty oxidized and when he was done the deep reds were back the trim all looked brand new, the interior looked stunning as well. My other SUV he brought the headlights back to life they're crystal clear again. Honestly I cannot recommend him enough.", "source": "google" },
    { "name": "michael wint", "rating": 5, "body": "Diamond Auto Spa did an amazing job, Andrew was super nice and easy to talk to. My truck looks great, and I'm well pleased with his leaving of expertise. I highly recommend Diamond Auto spa.", "source": "google" },
    { "name": "Nicole Selley", "rating": 5, "body": "I've had my car detailed MANY times by Andrew & let me just say this, he NEVER disappoints. I have a white SUV and live in florida, so you already know how hard it is to keep a white car clean between rain, dirt, pollen, and yes, 3 kids, yet he always has my car looking like I just pulled it out of the GMC parking lot. Shiny and brand new! He pays attention to every little detail whether it's the inside or outside, so if you're looking to get your vehicle detailed he's definitely the go to person for the job! Big or small. I'll never go anywhere else to get my car detailed.", "source": "google" },
    { "name": "Brandon Sardinha", "rating": 5, "body": "I highly recommend this company. Andrew was very professional, he provided an outstanding service going above & beyond cleaning the interior of my work truck. The attention to detail in every aspect was simply outstanding, it is very hard to find someone who takes this much pride in their work! I have already scheduled another vehicle to be done.", "source": "google" },
    { "name": "Charles Tubbs", "rating": 5, "body": "Diamond auto came out to detail my Durango from 2002 with a tan interior recently. After he arrived on site and giving me a very fair deal on a detail, he gave me a better suggestion without changing the price making my vehicle look better than it would have if you had simply just done what I had asked. I appreciate and respect, his professional opinion no matter what as I can guarantee he will always give you the best bang for your buck to guarantee the best service possum. Thank you again!", "source": "google" },
    { "name": "Roxanne Broecker", "rating": 5, "body": "Andrew did an amazing job!!!! He did the interior of shampooing the carpet and seats They look amazing!! Andrew was very courteous and very honest and takes pride in his work. My 2000 F250 has never looked better. Will definitely have him do my vehicles again!! ❤️", "source": "google" },
    { "name": "Tim Groves", "rating": 5, "body": "Super responsive. He worked all day and didn't take a break. Everything came out looking fabulous. I would highly recommend.", "source": "google" },
    { "name": "Kasey Harbison", "rating": 5, "body": "We could not be happier with our vehicles. Andrew worked from 8-5pm at our office on our company fleet cars and my personal truck. Absolutely hard work as I know nothing was in good shape and everything came out looking brand new! We will be calling him again!", "source": "google" },
    { "name": "Miranda Davis", "rating": 5, "body": "Andrew did an amazing job on my car! He was quickly responsive and I really appreciate his attention to detail when it came to the stains on the seats. I got this car used and in very poor condition, but he made the seats and carpets look incredible!", "source": "google" },
    { "name": "Kathy Thomas", "rating": 5, "body": "Andrew has done a fabulous job on my car many times. He spends the time to touch every detail. And very knowledgeable what needs to be done. And affordable. Each time he has done my car, it looks like a brand new car. The shine lasts for a good full month.", "source": "google" },
    { "name": "Blake Griffin", "rating": 5, "body": "Andrew and his company were very professional, and personable. He communicated the pricing and the extent of the work being done had consisted of. He's the only one I trust to work on mine and my wife's vehicles. 100% recommend, Always does an amazing job, this young man is going places!", "source": "google" },
    { "name": "Krista Etter", "rating": 5, "body": "Andrew detailed both my Camaro and my 2500 Silverado. They look just like they did, if not better than when they came off the showroom floor. Amazing job!!! Will definitely keep using him.", "source": "facebook" },
    { "name": "Laura Brummett-Benbow", "rating": 5, "body": "Detailed my husband's 2500 Dodge Ram work truck. The truck was covered in dust, pollen and dirt. Did an amazing job! The truck smells great and looks brand new! We highly recommend!", "source": "facebook" },
    { "name": "Lyndsey Tagliente", "rating": 5, "body": "Detailed my suv today and did a great job! Very reasonably priced too. Highly recommend", "source": "facebook" },
    { "name": "Brook Mckelvy", "rating": 5, "body": "Amazing job! Goes above and beyond!! My jeep still looks great over a week later", "source": "facebook" },
    { "name": "Nicole Griffin", "rating": 5, "body": "I have a busy life with 3 kids, school, full time job, homework, soccer, dinner, household duties so I have absolutely no time to clean my car but let me just say hiring Andrew to clean my car was the best choice I could have made! He did an absolute OUTSTANDING job! It looks like a brand new car & that I just pulled off the lot with! I couldn't have had a better person come and do what I couldn't! I would definitely use him again and a 5 star rating isn't good enough for the amazing work he did! 10/10 !!", "source": "facebook" },
    { "name": "Taylor Stokes", "rating": 5, "body": "Highly recommend for mobile detailing needs! Super responsive, communicative and showed up on time. My car looked shiny and brand new after he was done!!", "source": "google" },
    { "name": "Pool Gator pool service", "rating": 5, "body": "Andrew is the best vehicle detailer I have ever had. He has been doing our cars, boat, and Harley for at least a year now. He is very reliable and very detailed oriented. He has great communication with … More", "source": "google" },
    { "name": "James P. Chappell, III", "rating": 5, "body": "I had Andrew with Diamond complete a full detail of my work truck at my house. He did an insanely thorough job and was super accommodating to my schedule. He spent a lot of time to get it perfect and even threw in some extras. His mobile … More", "source": "google" },
    { "name": "Marisa Vicente", "rating": 5, "body": "Andrew was truly amazing he made my car looking like a brand new car . He took his time and make sure the job was done! Looking forward to seeing you again 😀 Thank you ! …", "source": "google" },
    { "name": "Kipra345", "rating": 5, "body": "Diamond Auto Spa I highly recommend! Very efficient work, pays very close attention to every detail, and takes the time to make sure nothing was missed. Absolutely love how my car shines like a diamond", "source": "google" },
    { "name": "ryan bozman", "rating": 5, "body": "Absolutely great experience. I appreciate the professionalism and attention to detail provided. I will definitely be back for additional services in the future.", "source": "google" },
    { "name": "Mark", "rating": 5, "body": "Andrew did an amazing job on my ford focus SVT. The paint looks immaculate and the interior is like it came off the factory floor. I would recommend Andrew for any and all of your car detailing needs.", "source": "google" },
    { "name": "Jean Flanders", "rating": 5, "body": "Andrew went above and beyond! Excellent customer service as well as excellent quality of work! Excellent experience for sure! Highly recommend!", "source": "google" },
    { "name": "Kelly Carpenter", "rating": 5, "body": "Andrew is the best detailer I've had do my vehicle, on time and very professional highly recommend. Thank you for a great job.", "source": "google" },
    { "name": "Tabatha Wilson", "rating": 5, "body": "Diamond Auto Spa did a great job on your car. I only thought it was clean until he was done!! Fantastic job!!!", "source": "google" },
    { "name": "Jasmin Rodriguez", "rating": 5, "body": "Very professional and easy to work with. My car looks almost new! Would definitely use him again. 😆 …", "source": "google" },
    { "name": "Phillip Pearson", "rating": 5, "body": "Did an outstanding job on my wife's car definitely having him come back and do my other cars as well Made it look just like it did when it rolled off the assembly line.", "source": "google" },
    { "name": "Brenda Shonyo", "rating": 5, "body": "My car was a dirty mess, both inside and out…I was so pleased with how like new it looked afterwards…very professional and friendly, I highly recommend this service to everyone…Thank you", "source": "google" },
    { "name": "Kyle Willman", "rating": 5, "body": "Top notch service on both my vehicles as well as my boat. His attention to detail is sublime. Highly recommend.", "source": "google" },
    { "name": "Jessica Huffman", "rating": 5, "body": "Andrew detailed my car again and did great work. My seats look and smell brand new!", "source": "google" },
    { "name": "Krista Etter", "rating": 5, "body": "Great service. On time. Only person I trust to detail my vehicles! Highly recommend.", "source": "google" },
    { "name": "Kristina Selley", "rating": 5, "body": "He does an amazing job detailing cars & makes sure you're happy with it.", "source": "google" },
    { "name": "John Deschene", "rating": 5, "body": "Excellent Quality Service. I would recommend Andrew to detail your automobile. Fantastic detailed work.", "source": "google" },
    { "name": "Dallas Craine", "rating": 5, "body": "Does Great work my trucks never looked better highly recommended", "source": "google" },
    { "name": "Kali Roberts", "rating": 5, "body": "Amazing detailing of our family's van! Would highly recommend!!", "source": "google" },
    { "name": "Felecia Humphrey", "rating": 5, "body": "Excellent service and job!! Will use again for sure!", "source": "google" },
    { "name": "Richard craig", "rating": 5, "body": "Very detailed and Thorough with the cleaning. Very impressed about the outcome!", "source": "google" },
    { "name": "Larry Lindsey", "rating": 5, "body": "Very professional approach and service. Would highly recommend.", "source": "google" },
    { "name": "Francesco Saavedra", "rating": 5, "body": "Amazing work with great price and precision!", "source": "google" },
    { "name": "Mark Duncan", "rating": 5, "body": "Great job", "source": "google" },
    { "name": "April Thomas", "rating": 5, "body": "I had my car done by Andrew he was very professional and personable. My car looks better than when I bought it! Highly recommend Diamond auto spa.", "source": "facebook" },
    { "name": "Kenzi Attaway", "rating": 5, "body": "My car looks amazing! Very professional and personable and did such a thorough job. Will definitely be back!", "source": "facebook" },
    { "name": "Lynikia Hopkins", "rating": 5, "body": "Great job on all my vehicles", "source": "google" },
    { "name": "skatetheworld 1314", "rating": 5, "body": "Quality work and efficient", "source": "google" },
    { "name": "Jeremy Santiago", "rating": 5, "body": "", "source": "google" },
    { "name": "Mike G", "rating": 4, "body": "Showed up on time and did exactly what was discussed. Amazing job. Highly recommended will definitely be using for the rest of my vehicles.", "source": "google" },
    { "name": "colton craine", "rating": 4, "body": "Shows up on time excellent work makes cars look new again would highly recommend we will be using for years to come!!!!!", "source": "google" }
];

        /*
        ==================================================================
            NEW REVIEWS CAROUSEL SCRIPT (JS-DRIVEN)
    ==============================================================
            */
        
        const track1 = document.getElementById('reviewsTrack1');
const track2 = document.getElementById('reviewsTrack2');
const clone1 = document.getElementById('reviewsTrack1-clone');
const clone2 = document.getElementById('reviewsTrack2-clone');

// Split the reviews into two arrays
const halfIndex = Math.ceil(reviews.length / 2);
const reviews1 = reviews.slice(0, halfIndex);
const reviews2 = reviews.slice(halfIndex);

function createReviewCard(review) {
    const card = document.createElement('div');
    card.className = 'review-card';
    
    const initial = review.name ? review.name.charAt(0).toUpperCase() : '?';
    
    const logoSrc = review.source === "facebook" 
        ? "{{ site.baseurl }}/Pics/Diamond-Auto-Spa-Detailing-FacebookIcon.png" 
        : "{{ site.baseurl }}/Pics/Diamond-Auto-Spa-Detailing-GoogleIcon.png";
    
    // FIX: Added object-fit: contain to this style string
    card.innerHTML = `
        <img src="${logoSrc}" alt="${review.source}" style="position: absolute; top: 1.5rem; right: 1.5rem; width: 30px; height: 30px; object-fit: contain;">
        <div class="review-header">
            <div class="review-avatar">${initial}</div>
            <div class="review-info">
                <span class="reviewer-name">${review.name}</span>
                <span class="stars">${'★'.repeat(review.rating)}</span>
            </div>
        </div>
        ${review.body ? `<p>"${review.body}"</p>` : ''}
    `;
    return card;
}

// Populate Track 1 and its clone
reviews1.forEach(review => {
       track1.appendChild(createReviewCard(review));
    clone1.appendChild(createReviewCard(review));
});

// Populate Track 2 and its clone (in reverse for visual variety)
reviews2.reverse().forEach(review => {
    
    track2.appendChild(createReviewCard(review));
    clone2.appendChild(createReviewCard(review));
});
        // --- END REWORKED SCRIPT ---
/* ==================================================================
            NEW VIDEO AUTOPLAY SCRIPT (Plays when visible)
        ==============================================================
        */
        
        // Smart Video Autoplay: Only plays videos when they're visible
        function setupVideoAutoplay() {
            const videoCards = document.querySelectorAll('.video-card video');
            
            const videoObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const video = entry.target;
                    
                    if (entry.isIntersecting) {
                        // Video is visible - play it
                        video.play().catch(err => {
                            // Autoplay was prevented (usually needs user interaction first)
                            console.log('Autoplay prevented:', err);
                        });
                    } else {
                        // Video scrolled out of view - pause it
                        video.pause();
                    }
                });
            }, {
                threshold: 0.5 // Play when 50% of video is visible
            });
            
            // Observe all videos
            videoCards.forEach(video => {
                videoObserver.observe(video);
            });
        }
        
        // Run the video autoplay setup
        setupVideoAutoplay();
        
        // --- END NEW VIDEO SCRIPT ---

        // --- Gallery Logic (Unchanged) ---
        const galleryBtn = document.getElementById('galleryBtn');
        const galleryLessBtn = document.getElementById('galleryLessBtn');
        const extraGalleryItems = document.querySelectorAll('[data-gallery-extra]');
        
        function updateGalleryView(showAll) {
            extraGalleryItems.forEach(item => {
                if (showAll) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
            
            galleryBtn.classList.toggle('hidden', showAll);
            galleryLessBtn.classList.toggle('hidden', !showAll);
        }

        galleryBtn.addEventListener('click', () => {
            updateGalleryView(true);
        });
        
        galleryLessBtn.addEventListener('click', () => {
            updateGalleryView(false);
            document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
        });

        updateGalleryView(false);

      

      
function initCompareImages(container) {
    let clicked = 0;
    let w, h;
    
    // Create slider
    const slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    container.appendChild(slider);
    
    // Get images
    const img = container.querySelector(".img-comp-img img"); 
    const overlay = container.querySelector(".img-comp-overlay");
    const overlayImg = overlay.querySelector("img"); 

    function updateSizes() {
        w = container.offsetWidth;
        h = container.offsetHeight;
        
        // FORCE both images to be the full width of the container
        img.style.width = w + "px";
        img.style.height = h + "px";
        overlayImg.style.width = w + "px"; 
        overlayImg.style.height = h + "px";
        
        // Set initial slider position
        slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
        overlay.style.width = (w / 2) + "px";
    }

    // Run immediately
    updateSizes();

    function slideReady(e) {
        e.preventDefault();
        clicked = 1;
        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
    }

    function slideFinish() {
        clicked = 0;
        window.removeEventListener("mousemove", slideMove);
        window.removeEventListener("touchmove", slideMove);
    }

    function slideMove(e) {
        if (!clicked) return false;
        let pos;
        const rect = container.getBoundingClientRect();
        
        e = (e.changedTouches) ? e.changedTouches[0] : e;
        pos = e.pageX - rect.left - window.pageXOffset;

        if (pos < 0) pos = 0;
        if (pos > w) pos = w;

        slide(pos);
    }

    function slide(x) {
        overlay.style.width = x + "px";
        slider.style.left = x - (slider.offsetWidth / 2) + "px";
    }

    // Add events
    slider.addEventListener("mousedown", slideReady);
    window.addEventListener("mouseup", slideFinish);
    slider.addEventListener("touchstart", slideReady);
    window.addEventListener("touchend", slideFinish);

    // Update on resize
    window.addEventListener('resize', updateSizes);
}
           

        // --- Run the slider function for each container ---
        document.querySelectorAll('.img-comp-container').forEach(initCompareImages);

        // [NEW] Function to animate the counter
function animateCounter(el) {
    const target = +el.dataset.target; // Get target number (10)
    if (el.dataset.isCounting) return; // Prevent re-running
    el.dataset.isCounting = true;

    const duration = 3000; 
    const stepTime = 20; // update every 20ms
    const steps = duration / stepTime;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            clearInterval(timer);
            el.textContent = target + '+'; // Set final text
        } else {
            el.textContent = Math.floor(current) + '+';
        }
    }, stepTime);
}
        
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');

                // [NEW] Check for and start the counter
            const counter = entry.target.querySelector('[data-target]');
            if (counter) {
                animateCounter(counter);
            }
                
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the item is visible
    });

    // Find all elements with the "reveal" class and observe them
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}

// Run the function
setupScrollAnimations();
    
