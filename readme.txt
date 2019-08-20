git
1.第一次创建： mkdir learngit --->“learngit”文件夹名

2.进入：cd learngit
  pwd  显示当前目录
  /Users/michael/learngit
  
3.通过git init命令把这个目录变成Git可以管理的仓库：
  Initialized empty Git repository in /Users/michael/learngit/.git/
  如果你没有看到.git目录，那是因为这个目录默认是隐藏的，用ls -ah命令就可以看见。
  
4.现在我们编写一个readme.txt文件，内容随便写******

5.git add readme.txt ---> 用命令git add告诉Git，把文件添加到仓库

6.git commit -m "wrote a readme file" ---> 简单解释一下git commit命令，-m后面输入的是本次提交的说明，可以输入任意内容，
当然最好是有意义的，这样你就能从历史记录里方便地找到改动记录。

为什么Git添加文件需要add，commit一共两步呢？因为commit可以一次提交很多文件，所以你可以多次add不同的文件，比如：
	git add file1.txt ---> 注意，可反复多次使用，添加多个文件；
	git add file2.txt file3.txt
	git commit -m "add 3 files."
	
版本回退
在Git中，我们用git log命令查看：历史记录--->git log命令显示从最近到最远的提交日志
Git必须知道当前版本是哪个版本，在Git中，用HEAD表示当前版本，上上一个版本就是HEAD^^，
当然往上100个版本写100个^比较容易数不过来，所以写成HEAD~100。
我们要把当前版本回退到上一个版本，就可以使用git reset命令：
git reset --hard HEAD^

（如果想还原某个版本）只要上面的命令行窗口还没有被关掉，你就可以顺着往上找啊找啊：历史记录；
git reset --hard 版本号
版本号没必要写全，前几位就可以了，Git会自动去找。当然也不能只写前一两位，因为Git可能会找到多个版本号，就无法确定是哪一个了。

Git提供了一个命令git reflog用来记录你的每一次命令：
栗子：
git reflog
e475afc HEAD@{1}: reset: moving to HEAD^
1094adb (HEAD -> master) HEAD@{2}: commit: append GPL
e475afc HEAD@{3}: commit: add distributed
eaadf4e HEAD@{4}: commit (initial): wrote a readme file

添加远程库
登录GitHub找到右上角，点击下好，选中 New repository
在 Repository name 填入 learngit ---> "learngit"本地文件夹名字，其他保持默认设置，
点击“Create repository”按钮，就成功地创建了一个新的Git仓库：

...

从现在起，只要本地作了提交，就可以通过命令：

git push origin master ---> 可能可以缩写为 git push