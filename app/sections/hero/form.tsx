const Form = () => {
  return (
    <form className="flex items-center space-x-2 text-black">
      <input
        type="email"
        placeholder="Enter your email"
        className="px-4 py-2 h-10 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        required
      />
      <button
        type="submit"
        className="px-3 py-2 h-10 text-black text-sm bg-primary rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Get Notified
      </button>
    </form>
  );
};

export default Form;
