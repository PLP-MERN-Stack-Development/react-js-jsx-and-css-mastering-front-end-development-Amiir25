const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 text-center py-4 mt-10">
      <div className="space-x-4">
        <a href="#" className="hover:text-blue-600">Privacy Policy</a>
        <a href="#" className="hover:text-blue-600">Terms of Service</a>
        <a href="#" className="hover:text-blue-600">Contact</a>
      </div>
      <p className="text-sm mt-2">© {new Date().getFullYear()} My React App. All rights reserved.</p>
    </footer>
  )
}

export default Footer;
