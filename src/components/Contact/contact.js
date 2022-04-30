import React from "react";
import './contactStyle.js'
import {Drop,DropTitle,Span,Form,FormInput,Input,Sub,TextArea,Submit} from './contactStyle'
import Footer from "../Footer/footer.js";

const Contact = () => {
  return (
    <>
      <Drop>
        <div className="container">
          <DropTitle>
            <Span>Drop </Span>Me A line
          </DropTitle>
          <Form>
            <FormInput>
              <Input type="text" placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
            </FormInput>
            <Input sub type="text"  placeholder="Your Subject" />
            <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
            <Submit type="submit" value="Send Message" />
          </Form>
        </div>
      </Drop>
      <Footer />
    </>
  );
};

export default Contact;
