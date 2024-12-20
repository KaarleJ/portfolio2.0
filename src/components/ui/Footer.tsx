import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="border-t shadow-inner-t shadow-primary p-12">
      <div className="flex flex-col justify-center items-center">
        <h2 className="py-4 text-2xl">Contact</h2>
        <p className="p-4 text-center">
          If you have any questions or would like to get in touch, feel free to
          contact me through any channel.
        </p>
        <Socials className="flex flex-row justify-center gap-6 z-50" />
        <p className="py-4 z-50">email: kaarle.jarvinen@gmail.com</p>
      </div>
    </footer>
  );
}
