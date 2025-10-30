export default function Footer() {
  return (
    <footer className="bg-gray-800 p-4 text-white mt-8">
      <p className="text-center">
        &copy; {new Date().getFullYear()}. All rights reserved.
      </p>
    </footer>
  );
}
