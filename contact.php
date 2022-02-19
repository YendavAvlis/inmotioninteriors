<?php
    define("TITLE", "Contact | In Motion Interiors");
    include('assets/includes/header.php')
    ?>
    </section>

    <!--====== HEADER PART ENDS ======-->
    <section class=" pt-160 pb-40 bg_cover" style="background-image: url(assets/images/gallery.webp)">
        <div class="container">
            <h1 class="white wow fadeInLeft hero__text" data-wow-duration="1.3s" data-wow-delay="0.2s">Contact</h1>
        </div>
    </section>
    
   
    <!--====== CONTACT PART START ======-->

    <section id="contact" class="contact_area bg_cover pt-120 pb-130" style="background-image: url(assets/images/contact_bg.jpg)">
        <div class="container">
            <div class="row justify-content-left">
                <div class="col-lg-6">
                    <div class="section_title section_title_2 text-left pb-25">
                        <h4 class="title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">Get In Touch</h4>
                        <p class="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">Would you like to get in touch?
                            Use the form bellow to send us an email and we will be able to help as soon as we can.
                        </p>
                    </div> <!-- section title -->
                </div>
            </div> <!-- row -->
            
            <form id="contact-form" action="assets/contact.php" method="post" class="wow fadeInUp"
                data-wow-duration="1.3s" data-wow-delay="0.4s">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="single_form">
                            <input type="text" placeholder="Name" name="name" id="name" required>
                        </div> <!-- single form -->
                    </div>
                    <div class="col-lg-6">
                        <div class="single_form">
                            <input type="email" placeholder="Email" name="email" id="email" required>
                        </div> <!-- single form -->
                    </div>
                    <div class="col-lg-6">
                        <div class="single_form">
                            <input type="text" placeholder="Phone Number" name="number" id="number" required>
                        </div> <!-- single form -->
                    </div>
                    <div class="col-lg-6">
                        <div class="single_form">
                            <input type="text" placeholder="Subject" name="subject" id="subject" required>
                        </div> <!-- single form -->
                    </div>
                    <div class="col-lg-12">
                        <div class="single_form">
                            <textarea placeholder="Message" name="message" id="message" required></textarea>
                        </div> <!-- single form -->
                    </div>
                    
                    <p class="form-message"></p>
                    
                    <div class="col-lg-12">
                        <div class="single_form text-center">
                            <button class="main-btn" type="submit">SUBMIT</button>
                        </div> <!-- single form -->
                    </div>
                </div> <!-- row -->
            </form>
        </div> <!-- container -->
    </section>

    <!--====== CONTACT PART ENDS ======-->
    
    <?php
    include('assets/includes/footer.php')
    ?>