import React from 'react';
import { Metadata } from 'next';
import HereToHelp from '@/components/HereToHelp';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Lisafolawiyo",
  description: "Refund And Exchange Policy | Lisafolawiyo",
};

function Faq() {
  return (
    <div className='shipping-info page-container'>
        <section className="page-section">
            <div className="page-section-inner">
                <div className="page-title-wrap">
                    <h1>Frequently Asked Questions</h1>
                </div>
                <div className="page-section-body about-section-body">
                  <h1>Browsing</h1>
                  <div className='acc-container'>
                    <Accordion
                      type="single"
                      collapsible
                      className="w-full"
                      defaultValue="item-1"
                    >
                      <AccordionItem value="item-1">
                        <AccordionTrigger>WHAT IS THE AVAILABILITY OF ITEMS PUBLISHED ON THE WEBSITE?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                          <p>
                            All items offered for sale on our e-commerce site lisafolawiyo.com are available. 
                            If you wish to order an item in a large quantity, please contact Customer Services by telephone or by email.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>WHY DO I SOMETIMES HAVE TO WAIT FOR AN EMBELLISHED ITEM?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                          <p>
                            All our products are hand-made by our artisans, according to our very stringent quality criteria. We work mainly with natural materials and resources limited by very strict selection criteria. 
                            For all these reasons, it can take several weeks to create an item.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>I CAN’T FIND THE ITEM I AM LOOKING FOR ON YOUR WEBSITE, WHAT CAN I DO?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                          <p>
                            The website offers a selection of items which are all available for sale. As the range is constantly updated, please visit regularly. 
                            You can conduct a search on our website, by typing your request directly into the “Search” field at the top left of your screen. 
                            Customer Services are available to help you with your searches, via the form in our “Contact us” link.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <h1>Online Shopping</h1>
                  <div className='acc-container'>
                                        <Accordion
                      type="single"
                      collapsible
                      className="w-full"
                      defaultValue="item-1"
                    >
                      <AccordionItem value="item-1">
                        <AccordionTrigger>HOW CAN I GET HELP IN MAKING MY ORDER?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                          <p>
                            You can contact Customer Services by telephone or by email or by filling out the form in our ‘Contact Us’ link.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>HOW CAN I AMEND THE ORDER I'VE JUST MADE?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                          <p>
                            To make any amendments to your order please contact Customer Services by telephone or by email or by filling out the form in our ‘Contact Us’ link as soon as possible.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>CAN I ADD A PERSONAL MESSAGE TO MY GIFT ORDER?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                          <p>
                            It is possible to include a personal message to your order by selecting the “Add message” option at the delivery stage.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>CAN I INCLUDE A GIFT RECEIPT WITH MY ORDER?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                          <p>
                            When ordering, simply tick the “Include gift receipt” box at the delivery stage. A gift receipt that does not show the price will then be automatically inserted into your parcel. A duplicate of the original invoice with price can also be downloaded directly from your customer account.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-5">
                        <AccordionTrigger>IS MY PAYMENT SECURE?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                          <p>
                            All transactions made on the website Lisafolawiyo.com are secure. The presence of a padlock next to the page address beginning with “https” indicates to you that you are in a secure environment.
                          </p>
                          <p>
                            Furthermore, Lisa Folawiyo Studio has put security measures in place to protect the personal information you communicate against unauthorised access and use. Please however be aware that the transmission of data via the internet is never 100% safe and that any information communicated online could potentially be collected and used by people other than its intended recipients.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-6">
                        <AccordionTrigger>DO YOU ACCEPT INTERNATIONAL PAYMENT CARDS?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                          <p>
                            We accept international payment cards. However, when you submit your order, you must enter your international billing address which is linked to your credit card.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-7">
                        <AccordionTrigger>HOW TO SEND A RETURN?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                          <p>
                            We gladly accept returns that meet our policy. Please email us at info@lisafolawiyo.com with your order number in the subject line to submit your return request. You are responsible for repackaging and shipping the item on time. Lisa Folawiyo is not responsible for any packages that are lost in transit.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-8">
                        <AccordionTrigger>CAN I RETURN OR EXCHANGE A GIFT PURCHASED ON THE WEBSITE? CAN THE PERSON RECEIVING A GIFT REQUEST AN EXCHANGE?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                          <p>
                            We gladly accept returns that meet our policy, including gifts. Please email us at info@lisafolawiyo.com with your order number in the subject line to submit your return request. You are responsible for repackaging and shipping the item on time. Lisa Folawiyo is not responsible for any packages that are lost in transit.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-9">
                        <AccordionTrigger>WHAT ARE YOUR DELIVERY TIMES?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                          <p>
                            Delivery is within 4-6 weeks. Please contact Customer Services by telephone or by email or by filling out the form in our ‘Contact Us’ link with any questions.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-10">
                        <AccordionTrigger>DO YOU SHIP WORLDWIDE?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                          <p>
                            We've partnered with DHL Express to ensure seamless global delivery covering 220 countries worldwide, within 3-5 business days of ship date. Orders are processed and fulfilled Monday to Friday between 10AM and 6PM West African Time.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-11">
                        <AccordionTrigger>DO YOU HOLD SALES?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                          <p>
                            Yes, we do. Subscribe to our newsletter and be the first to learn about our latest sales news.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-12">
                        <AccordionTrigger>ARE ALL YOUR ITEMS EMBELLISHED?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                          <p>
                            No, whilst embellishment is our signature craftmanship we offer several non-embellished items.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <h1>Product Information</h1>
                  <div className='acc-container'>
                    <Accordion
                      type="single"
                      collapsible
                      className="w-full"
                      defaultValue="item-1"
                    >
                      <AccordionItem value="item-1">
                        <AccordionTrigger>HOW CAN I PLACE AN ORDER FOR A CUSTOM ITEM?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                          <p>
                            If you wish to place an order for a custom item, please fill out the ‘Contact Us’ form or contact Customer Services by telephone or email and we will get back to you soon.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
            </div>
        </section>
        <HereToHelp />
    </div>
  )
}

export default Faq