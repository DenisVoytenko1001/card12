function Card({ title, description, image }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-64 text-center 
                    hover:shadow-2xl hover:-translate-y-2 
                    transition duration-300">

      <img
        src={image}
        alt={title}
        className="w-28 h-28 rounded-full mx-auto mb-4 object-cover 
                   border-4 border-gray-100"
      />

      <h2 className="text-xl font-bold text-gray-800">
        {title}
      </h2>

      <p className="text-gray-600 mt-2 text-sm leading-relaxed">
        {description}
      </p>

      <button
        onClick={() => alert(title)}
        className="mt-5 bg-blue-500 text-white px-5 py-2 rounded-xl 
                   hover:bg-blue-600 hover:scale-105 
                   transition duration-300"
      >
        Дізнатися більше
      </button>

    </div>
  );
}

export default Card;