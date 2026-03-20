"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = 'kritimtechnologies@gmail.com'; // Resend free tier requires this to match the account email unless a custom domain is verified.

export async function sendTestDriveEmail(data: {
  name: string;
  email: string;
  mobile: string;
  selectedDate: string;
  selectedTime: string;
  selectedLocation: string;
}) {
  try {
    const { data: resData, error } = await resend.emails.send({
      from: 'Niesh Auto Test Drives <onboarding@resend.dev>',
      to: TO_EMAIL,
      subject: `New Test Drive Booking: ${data.name}`,
      html: `
        <h2>New Test Drive Requested!</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Mobile:</strong> ${data.mobile}</p>
        <p><strong>Date:</strong> ${data.selectedDate}</p>
        <p><strong>Time:</strong> ${data.selectedTime}</p>
        <p><strong>Location:</strong> ${data.selectedLocation}</p>
      `
    });

    if (error) {
      console.error("Resend API Error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data: resData };
  } catch (error: any) {
    console.error("Server Action Exception:", error);
    return { success: false, error: error?.message || "Internal Error" };
  }
}

export async function sendContactEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    const { data: resData, error } = await resend.emails.send({
      from: 'Niesh Auto Contact <onboarding@resend.dev>',
      to: TO_EMAIL,
      subject: `New Contact Form Message: ${data.subject || data.name}`,
      html: `
        <h2>New Message Received!</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `
    });

    if (error) {
      console.error("Resend API Error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data: resData };
  } catch (error: any) {
    console.error("Server Action Exception:", error);
    return { success: false, error: error?.message || "Internal Error" };
  }
}

export async function sendNewsletterEmail(email: string) {
  try {
    const { data: resData, error } = await resend.emails.send({
      from: 'Niesh Auto Subscriptions <onboarding@resend.dev>',
      to: TO_EMAIL,
      subject: `New Newsletter Subscriber: ${email}`,
      html: `
        <h2>New Newsletter Subscription!</h2>
        <p>A new potential customer just subscribed for updates:</p>
        <p><strong>Email:</strong> ${email}</p>
      `
    });

    if (error) {
      console.error("Resend API Error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data: resData };
  } catch (error: any) {
    console.error("Server Action Exception:", error);
    return { success: false, error: error?.message || "Internal Error" };
  }
}
