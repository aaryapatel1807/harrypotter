# Refresh PATH to include ffmpeg
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# Join 5 clips with 0.6-second crossfades at 24fps
# Each clip is 8 seconds, crossfade is 0.6 seconds
# Total: 8*5 - 0.6*4 = 40 - 2.4 = 37.6 seconds

ffmpeg -i clips\clip1.mp4 -i clips\clip2.mp4 -i clips\clip3.mp4 -i clips\clip4.mp4 -i clips\clip5.mp4 `
-filter_complex `
"[0:v]fps=24,scale=1920:1080[v0]; `
[1:v]fps=24,scale=1920:1080[v1]; `
[2:v]fps=24,scale=1920:1080[v2]; `
[3:v]fps=24,scale=1920:1080[v3]; `
[4:v]fps=24,scale=1920:1080[v4]; `
[v0][v1]xfade=transition=fade:duration=0.6:offset=7.4[vf1]; `
[vf1][v2]xfade=transition=fade:duration=0.6:offset=14.8[vf2]; `
[vf2][v3]xfade=transition=fade:duration=0.6:offset=22.2[vf3]; `
[vf3][v4]xfade=transition=fade:duration=0.6:offset=29.6[vf4]" `
-map "[vf4]" -c:v libx264 -crf 18 -preset slow -r 24 -pix_fmt yuv420p master.mp4

Write-Host "Master video created successfully"
