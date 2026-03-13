<?php
/*
 * ────────────────────────────────────────────────────
 *  Portfolio Contact Form — PHP Mail Handler
 * ────────────────────────────────────────────────────
 *
 *  Place this file on any PHP-enabled hosting (shared hosting,
 *  XAMPP, WAMP, or a VPS). The React frontend POSTs JSON to
 *  this endpoint, and it sends an email via PHP's mail().
 *
 *  DEPLOYMENT:
 *    1. Upload this file to your hosting under /api/contact.php
 *    2. Set VITE_API_URL in the React .env to your hosting URL
 *       (or leave blank if frontend & backend are on the same domain)
 *    3. Make sure your hosting supports PHP mail()
 *
 *  For local testing with XAMPP / WAMP:
 *    1. Place this file in htdocs/api/contact.php
 *    2. Start Apache
 *    3. The React dev server proxies to http://localhost/api/contact.php
 */

// ── CORS headers (allow requests from React dev server) ──
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// ── Read JSON body ──
$json = file_get_contents('php://input');
$data = json_decode($json, true);

$name    = isset($data['name'])    ? trim(strip_tags($data['name']))    : '';
$email   = isset($data['email'])   ? trim(strip_tags($data['email']))   : '';
$message = isset($data['message']) ? trim(strip_tags($data['message'])) : '';

// ── Validate ──
$errors = [];
if (empty($name))    $errors[] = 'Name is required';
if (empty($email))   $errors[] = 'Email is required';
elseif (!filter_var($email, FILTER_VALIDATE_EMAIL))
                     $errors[] = 'Invalid email address';
if (empty($message)) $errors[] = 'Message is required';

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['error' => implode(', ', $errors)]);
    exit;
}

// ── Send email ──
$to      = 'princek8320@gmail.com';
$subject = "Portfolio Contact from $name";

$body  = "You received a new message from your portfolio website:\n\n";
$body .= "Name:    $name\n";
$body .= "Email:   $email\n\n";
$body .= "Message:\n$message\n";

$headers  = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Email sent successfully!']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email. Please try again later.']);
}
?>
