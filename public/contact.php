<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    $name = strip_tags(trim($input['name']));
    $email = filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($input['phone']));
    $program = strip_tags(trim($input['program']));
    $message = strip_tags(trim($input['message']));
    
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Invalid input']);
        exit;
    }

    $to = "studyinasia05@gmail.com";
    $subject = "Nouveau message de contact - Study In Asia";
    
    $email_content = "Nom: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= $phone ? "Téléphone: $phone\n" : "";
    $email_content .= $program ? "Programme: $program\n\n" : "\n";
    $email_content .= "Message:\n$message\n";

    $headers = "From: webmaster@studyinasia.ma\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $email_content, $headers)) {
        echo json_encode(['status' => 'success', 'message' => 'Message sent successfully']);
    } else {
        http_response_code(500);
        echo json_encode(['status' => 'error', 'message' => 'Failed to send email']);
    }
} else {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
}
?>
