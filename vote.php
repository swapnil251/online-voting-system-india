<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $conn = new mysqli("localhost", "root", "", "voting_system");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $voter_id = $_POST['voter_id'];
    $candidate_id = $_POST['candidate_id'];

    $check = $conn->prepare("SELECT * FROM votes WHERE voter_id = ?");
    $check->bind_param("i", $voter_id);
    $check->execute();
    $result = $check->get_result();

    if ($result->num_rows > 0) {
        echo "Already Voted!";
    } else {
        $stmt = $conn->prepare("INSERT INTO votes (voter_id, candidate_id) VALUES (?, ?)");
        $stmt->bind_param("ii", $voter_id, $candidate_id);
        if ($stmt->execute()) {
            echo "Vote Cast Successfully!";
        } else {
            echo "Vote Failed.";
        }
    }

    $check->close();
    $stmt->close();
    $conn->close();
}
?>
