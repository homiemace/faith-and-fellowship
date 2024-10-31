<script>
    import teamPhoto1 from '/images/faithandfellowshipbackground.jpg';
    import teamPhoto2 from '/images/faithandfellowshipbackground.jpg';
  </script>
  
  <div class="bg-gray-100 py-16 px-6">
    <h2 class="text-3xl font-bold text-center text-teal-700 mb-6">About Us</h2>
    <p class="text-center max-w-2xl mx-auto mb-12 text-gray-700">
      Welcome to our Bible Study Group! We gather weekly to explore scripture, share insights, and grow together in faith. Our mission is to foster a loving, supportive community centered around God’s Word.
    </p>
  
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Left Content: Text about the group or team -->
      <div class="flex flex-col justify-center">
        <h3 class="text-xl font-semibold text-teal-700 mb-2">Our Mission</h3>
        <p class="text-gray-600 mb-4">
          We believe in the power of community and fellowship. Our goal is to create a welcoming space for everyone, where we can grow spiritually and encourage each other through Bible study, prayer, and worship.
        </p>
        <h3 class="text-xl font-semibold text-teal-700 mb-2">Our Vision</h3>
        <p class="text-gray-600">
          We envision a world where every person feels connected and empowered by their faith journey, grounded in scripture and supported by their community.
        </p>
      </div>
  
      <!-- Right Content: Photos and group highlights -->
      <div class="flex flex-col items-center">
        <img src={teamPhoto1} alt="Our Bible study group gathered for discussion" class="rounded-lg shadow-lg mb-4 w-full h-64 object-cover">
        <img src={teamPhoto2} alt="Members sharing and learning together" class="rounded-lg shadow-lg w-full h-64 object-cover">
      </div>
    </div>
  </div>
  