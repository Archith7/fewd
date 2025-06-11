const AboutPage = () => (
  <div className="space-y-6 bg-white p-8 rounded-lg shadow-md">
    <section className="bg-indigo-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-indigo-800 mb-4">About Our Company</h2>
      <p className="text-indigo-600 mb-4">
        We are a technology company focused on creating innovative solutions for modern web applications.
        Our team is passionate about delivering high-quality software that makes a difference.
      </p>
      <p className="text-indigo-600">
        Founded in 2020, we have grown to become a trusted partner for businesses worldwide.
      </p>
    </section>


    <section className="bg-orange-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-orange-800 mb-4">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { name: "John Doe", title: "CEO & Founder" },
          { name: "Jane Smith", title: "CTO" },
          { name: "Mike Johnson", title: "Lead Developer" },
        ].map((member, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 bg-orange-200 rounded-full mx-auto mb-2 flex items-center justify-center">
              <User className="text-orange-600" size={24} />
            </div>
            <h3 className="font-semibold">{member.name}</h3>
            <p className="text-orange-600">{member.title}</p>
          </div>
        ))}
      </div>
    </section>


    <section className="bg-teal-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-teal-800 mb-4">Our Mission</h2>
      <p className="text-teal-600">
        To empower businesses with cutting-edge technology solutions that drive growth and innovation.
        We believe in creating software that not only meets current needs but anticipates future challenges.
      </p>
    </section>
  </div>
);
