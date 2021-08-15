# Using git-lfs

git-lfs is used to manage large file binaries in git, and automatically
works with github.

To set this up locally be sure to install it on your system:

```bash
git lfs install
```

then add the files:

```bash
git lfs track "*.psd"
```

**note** `.svg` and `.png` files are already tracked

## More docs

<https://git-lfs.github.com/>
