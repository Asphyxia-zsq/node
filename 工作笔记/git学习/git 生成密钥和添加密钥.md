1. 打开git 输入以下命令之后回车再下一步

```
 cd ~/.ssh/
```

 2.配置全局的name和email，

```
git config --global user.name "zhoumeng"
```

3.配置全局的name和email，

```
git config --global user.email "164591357@qq.com"
```

4.ssh-keygen -t rsa -C "你的公司或个人邮箱"

```
ssh-keygen -t rsa -C "164591357@qq.com"
```

5.连续按3下回车键

![img](https://img-blog.csdnimg.cn/20190626093057168.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQwMTkwNjI0,size_16,color_FFFFFF,t_70)

生成后去到提示的路径找到文件

![img](https://img-blog.csdnimg.cn/20190626093130298.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQwMTkwNjI0,size_16,color_FFFFFF,t_70)

用文本方式打开后进行全部复制

之后去到仓库进行密钥添加

![img](https://img-blog.csdnimg.cn/2019062609330227.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQwMTkwNjI0,size_16,color_FFFFFF,t_70)