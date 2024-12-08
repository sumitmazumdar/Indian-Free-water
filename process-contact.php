<?php
header('Content-Type: application/json');

// Get form data
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';
$subject = $_POST['subject'] ?? '';
$message = $_POST['message'] ?? '';

// Validate inputs
if (empty($name) || empty($email) || empty($message)) {
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address']);
    exit;
}

// Email configuration
$to = "sumitmazumdar6@gmail.com"; // Replace with your email
$email_subject = "New Contact Form Submission: $subject";
$email_body = "You have received a new message.\n\n".
    "Name: $name\n".
    "Email: $email\n".
    "Phone: $phone\n".
    "Subject: $subject\n".
    "Message:\n$message";

$headers = "From: $email\n";
$headers .= "Reply-To: $email\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
if (mail($to, $email_subject, $email_body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Thank you! Your message has been sent.']);
} else {
    echo json_encode(['success' => false, 'message' => 'Sorry, there was an error sending your message.']);
}
?>
