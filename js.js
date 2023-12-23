local HttpService = game:GetService("HttpService")

-- Replace 'your-website-url' with the actual URL of your GitHub Pages repository
local apiUrl = "https://rohitgupta0409.github.io/eatingblobsim.github.io/index.html"

local success, response = pcall(function()
    return HttpService:GetAsync(apiUrl)
end)

if success then
    print("Request successful")

    -- Extract the code from the response
    local codeSnippet = response:match('<code>(.-)</code>')

    print("Code snippet:")
    print(codeSnippet)
else
    print("Request failed:", response)
end
