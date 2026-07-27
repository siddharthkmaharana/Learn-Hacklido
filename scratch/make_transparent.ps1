Add-Type -AssemblyName System.Drawing
$srcPath = "c:\Users\sidsm\PROJECTS\others\Learn_Hacklido\src\logo.png"
$bmp = [System.Drawing.Bitmap]::new([string]$srcPath)
$width = $bmp.Width
$height = $bmp.Height

$visited = [System.Boolean[,]]::new($width, $height)
$queue = [System.Collections.Queue]::new()

for ($x = 0; $x -lt $width; $x++) {
    foreach ($y in @(0, ($height - 1))) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.R -gt 230 -and $c.G -gt 230 -and $c.B -gt 230) {
            $queue.Enqueue(@($x, $y))
            $visited[$x, $y] = $true
        }
    }
}
for ($y = 0; $y -lt $height; $y++) {
    foreach ($x in @(0, ($width - 1))) {
        if (-not $visited[$x, $y]) {
            $c = $bmp.GetPixel($x, $y)
            if ($c.R -gt 230 -and $c.G -gt 230 -and $c.B -gt 230) {
                $queue.Enqueue(@($x, $y))
                $visited[$x, $y] = $true
            }
        }
    }
}

$dirs = @(@(-1, 0), @(1, 0), @(0, -1), @(0, 1))

while ($queue.Count -gt 0) {
    $curr = $queue.Dequeue()
    $cx = $curr[0]
    $cy = $curr[1]
    
    $bmp.SetPixel($cx, $cy, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
    
    foreach ($d in $dirs) {
        $nx = $cx + $d[0]
        $ny = $cy + $d[1]
        
        if ($nx -ge 0 -and $nx -lt $width -and $ny -ge 0 -and $ny -lt $height) {
            if (-not $visited[$nx, $ny]) {
                $nc = $bmp.GetPixel($nx, $ny)
                if ($nc.R -gt 210 -and $nc.G -gt 210 -and $nc.B -gt 210) {
                    $queue.Enqueue(@($nx, $ny))
                    $visited[$nx, $ny] = $true
                }
            }
        }
    }
}

$tempPath = "c:\Users\sidsm\PROJECTS\others\Learn_Hacklido\src\logo_temp.png"
$bmp.Save($tempPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Move-Item -Path $tempPath -Destination $srcPath -Force
write-output "Logo background transparentized successfully!"
