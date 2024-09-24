/* eslint-disable react/prop-types */
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    country: "USA",
    countryFlag: "https://via.placeholder.com/24", // Replace with actual country flag URL
    photo: "https://via.placeholder.com/100", // Replace with actual person's photo URL
    description:
      "This service is fantastic! It has helped me grow my business exponentially. Highly recommended to everyone.",
  },
  {
    id: 2,
    name: "Jane Smith",
    country: "Canada",
    countryFlag: "https://via.placeholder.com/24",
    photo: "https://via.placeholder.com/100",
    description:
      "I was blown away by the level of support and care. They really go above and beyond!",
  },
  {
    id: 3,
    name: "Michael Johnson",
    country: "Australia",
    countryFlag: "https://via.placeholder.com/24",
    photo: "https://via.placeholder.com/100",
    description:
      "A wonderful experience from start to finish. I couldn’t ask for more!",
  },
];

const TestimonialCard = ({
  name,
  country,
  countryFlag,
  photo,
  description,
}) => {
  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-md">
      <div className="flex items-center">
        <img
          className="w-16 h-16 rounded-full mr-4"
          src={photo}
          alt={`${name}'s Photo`}
        />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="flex items-center text-sm text-gray-500">
            <img
              className="w-6 h-6 mr-2"
              src={countryFlag}
              alt={`${country} Flag`}
            />
            <span>{country}</span>
          </div>
        </div>
      </div>
      <p className="mt-4 text-gray-700">{description}</p>
    </div>
  );
};

const Testimonial = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 bg-gray-100">
      {testimonials.map((testimonial) => (
        <TestimonialCard
          key={testimonial.id}
          name={testimonial.name}
          country={testimonial.country}
          countryFlag={testimonial.countryFlag}
          photo={testimonial.photo}
          description={testimonial.description}
        />
      ))}
    </div>
  );
};

export default Testimonial;
