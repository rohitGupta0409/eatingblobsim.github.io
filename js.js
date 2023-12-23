// js.js

// Function to return Lua code
function getLuaCode() {
  return `
print("working")

game.Players.PlayerAdded:Connect(function(player)
	player.CharacterAdded:Connect(function(char)
		print(char.Name)
	end)
end)
  `;
}

// Return the Lua code
getLuaCode();
