import React from "react";

const RefundPolicy = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Refund Policy</h1>
      <p className="mb-4">
        We offer a <strong>7 days "NO QUESTIONS ASKED" refund policy</strong>.
        Within 7 days of your course purchase, you may request a refund at any
        time.
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>
          To request a refund, please email us at{" "}
          <a className="text-blue-600" href="mailto:asadhashmi22@gmail.com">
            asadhashmi22@gmail.com
          </a>
          .
        </li>
        <li>
          For course bundles, refunds apply to the entire bundle and not
          individual courses.
        </li>
        <li>
          Refunds typically take <strong>5–7 business days</strong> to reflect
          in your bank after initiation.
        </li>
        <li>
          Once a refund is processed, no additional refunds will be issued for
          the same purchase.
        </li>
        <li>
          Purchases made using the "Gift-a-course" feature are{" "}
          <strong>not eligible</strong> for refunds.
        </li>
        <li>
          Refunds are only provided if you currently have access to the course.
        </li>
        <li>
          If your email ID is found suspicious or involved in malicious
          activity, a refund will not be processed.
        </li>
      </ul>

      <p>
        If you have any questions, feel free to contact us at{" "}
        <a className="text-blue-600" href="mailto:asadhashmi22@gmail.com">
          asadhashmi22@gmail.com
        </a>
        .
      </p>

      <p className="mt-6 text-sm text-gray-600">
        Website:{" "}
        <a
          className="text-blue-600"
          href="https://syedasadhashmi.online"
          target="_blank"
          rel="noopener noreferrer"
        >
          syedasadhashmi.online
        </a>
      </p>
      <p className="text-sm text-gray-600">Owner: Syed Asad Hashmi</p>
    </div>
  );
};

export default RefundPolicy;
