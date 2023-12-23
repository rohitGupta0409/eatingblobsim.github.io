document.addEventListener("DOMContentLoaded", function () {
  // Replace 'your-username' and 'your-repo' with your GitHub username and repository name
  const apiUrl = "https://your-username.github.io/your-repo/get-code/";

  // Replace 'code1' with the actual code name you want
  const codeName = "print("working")

game.Players.PlayerAdded:Connect(function(player)
	player.CharacterAdded:Connect(function(char)
		print(char.Name)
	end)
end)";

  fetch(apiUrl + codeName)
    .then(response => response.json())
    .then(data => {
      const codeResultElement = document.getElementById("codeResult");
      codeResultElement.textContent = "Code: " + data.code;
    })
    .catch(error => console.error("Error fetching code:", error));
});
